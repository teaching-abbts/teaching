var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();

app.MapGet(
  "/image-gallery",
  () =>
  {
    var webRootPath =
      app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    var uploadsFolder = Path.Combine(webRootPath, "uploads");
    Directory.CreateDirectory(uploadsFolder);

    var imageFiles = Directory
      .GetFiles(uploadsFolder)
      .Select(Path.GetFileName)
      .Where(f => f is not null)
      .Cast<string>()
      .ToList();

    var imageItems = string.Join("\n", imageFiles.Select(GalleryItem));
    var emptyMessage = imageFiles.Count == 0 ? "<p>Keine Bilder vorhanden.</p>" : string.Empty;

    return HtmlPage(
      "Bildgalerie",
      GalleryStyles(),
      $"""
      <h2>Bildgalerie</h2>
      <div class="toolbar">
        <a class="btn" href="/image-gallery/upload">Bilder hochladen</a>
      </div>
      {emptyMessage}
      <div class="gallery">
      {imageItems}
      </div>
      """
    );
  }
);

app.MapGet(
  "/image-gallery/upload",
  () =>
    HtmlPage(
      "Bilder hochladen",
      GalleryStyles(),
      """
      <h2>Bilder hochladen</h2>
      <form action="/image-gallery/upload" method="post" enctype="multipart/form-data">
        <label for="files">Bilder auswählen:</label>
        <input type="file" id="files" name="files" accept="image/*" multiple required />
        <input type="submit" value="Hochladen" />
      </form>
      <a class="back" href="/image-gallery">← Zurück zur Galerie</a>
      """
    )
);

app.MapPost(
  "/image-gallery/upload",
  async (HttpRequest request) =>
  {
    if (!request.HasFormContentType)
    {
      return Results.BadRequest("Multipart-Formulardaten erwartet.");
    }

    var form = await request.ReadFormAsync();

    if (form.Files.Count == 0)
    {
      return Results.BadRequest("Keine Dateien übermittelt.");
    }

    var webRootPath =
      app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    var uploadsFolder = Path.Combine(webRootPath, "uploads");
    Directory.CreateDirectory(uploadsFolder);

    foreach (var file in form.Files)
    {
      if (file.Length == 0)
      {
        continue;
      }

      if (
        file.ContentType is null
        || !file.ContentType.StartsWith("image/", StringComparison.OrdinalIgnoreCase)
      )
      {
        return Results.BadRequest(
          $"'{System.Net.WebUtility.HtmlEncode(file.FileName)}' ist kein gültiges Bild."
        );
      }

      var extension = Path.GetExtension(file.FileName);
      var fileName = $"{Guid.NewGuid():N}{extension}";
      var filePath = Path.Combine(uploadsFolder, fileName);

      await using var stream = File.Create(filePath);
      await file.CopyToAsync(stream);
    }

    return Results.Redirect("/image-gallery");
  }
);

app.MapPost(
  "/image-gallery/delete/{fileName}",
  (string fileName) =>
  {
    var safeFileName = Path.GetFileName(fileName);

    if (string.IsNullOrWhiteSpace(safeFileName))
    {
      return Results.BadRequest("Ungültiger Dateiname.");
    }

    var webRootPath =
      app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    var filePath = Path.Combine(webRootPath, "uploads", safeFileName);

    if (File.Exists(filePath))
    {
      File.Delete(filePath);
    }

    return Results.Redirect("/image-gallery");
  }
);

app.MapGet("/", () => Results.Redirect("/image-gallery"));

app.Run();

IResult HtmlPage(string title, string styles, string body)
{
  return Results.Content(
    $"""
    <!DOCTYPE HTML>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>{title}</title>
        <style>
          {styles}
        </style>
      </head>
      <body>
        {body}
      </body>
    </html>
    """,
    "text/html"
  );
}

string GalleryItem(string fileName)
{
  return $"""
    <div class="gallery-item">
      <img src="/uploads/{fileName}" alt="{System.Net.WebUtility.HtmlEncode(fileName)}" />
      <form method="post" action="/image-gallery/delete/{Uri.EscapeDataString(fileName)}">
        <button type="submit">Löschen</button>
      </form>
    </div>
    """;
}

string GalleryStyles()
{
  return """
    body {
      font-family: sans-serif;
      padding: 20px;
      background: #f5f5f5;
    }
    h2 {
      text-align: center;
    }
    .toolbar {
      text-align: center;
      margin-bottom: 20px;
    }
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }
    .gallery-item {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
      overflow: hidden;
      width: calc(33% - 16px);
      min-width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 10px;
    }
    .gallery-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .gallery-item button {
      margin-top: 8px;
      padding: 4px 12px;
      cursor: pointer;
      background: #e53935;
      color: white;
      border: none;
      border-radius: 4px;
    }
    .gallery-item button:hover {
      background: #b71c1c;
    }
    a.btn {
      display: inline-block;
      padding: 8px 16px;
      background: #1976d2;
      color: white;
      text-decoration: none;
      border-radius: 4px;
    }
    a.btn:hover {
      background: #0d47a1;
    }
    """;
}
