var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles();

app.MapGet(
  "/",
  () =>
    Results.Content(
      """
      <!DOCTYPE HTML>
      <html>
        <head>
          <title>HTML Form Example</title>
          <style>
            body {
              width: 100%;
            }

            h2 {
              text-align: center;
            }

            form {
              width: 300px;
              margin: 0 auto;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              background-color: white;
            }

            input[type="submit"] {
              margin-top: 5px;
            }
          </style>
        </head>
        <body>
          <h2>HTML Form Example</h2>
          <form action="/submit" method="post" enctype="multipart/form-data">
            <label for="name">Name:</label><br />
            <input type="text" id="name" name="name" required /><br />
            <label for="file">Image:</label><br />
            <input type="file" id="file" name="file" accept="image/*" required /><br />
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
      """,
      "text/html"
    )
);

app.MapPost(
  "/submit",
  async (HttpRequest request) =>
  {
    if (!request.HasFormContentType)
    {
      return Results.BadRequest("Expected multipart form data.");
    }

    var form = await request.ReadFormAsync();
    var name = form["name"].ToString();
    var file = form.Files["file"];

    if (string.IsNullOrWhiteSpace(name) || file is null || file.Length == 0)
    {
      return Results.BadRequest("Name and image file are required.");
    }

    if (file.ContentType is null || !file.ContentType.StartsWith("image/", StringComparison.OrdinalIgnoreCase))
    {
      return Results.BadRequest("Only image uploads are allowed.");
    }

    var webRootPath = app.Environment.WebRootPath ?? Path.Combine(app.Environment.ContentRootPath, "wwwroot");
    var uploadsFolder = Path.Combine(webRootPath, "uploads");
    Directory.CreateDirectory(uploadsFolder);

    var extension = Path.GetExtension(file.FileName);
    var fileName = $"{Guid.NewGuid():N}{extension}";
    var filePath = Path.Combine(uploadsFolder, fileName);

    await using (var stream = File.Create(filePath))
    {
      await file.CopyToAsync(stream);
    }

    var encodedName = System.Net.WebUtility.HtmlEncode(name);
    var imageUrl = $"/uploads/{fileName}";

    return Results.Content(
      $"""
      <!DOCTYPE HTML>
      <html>
        <head>
          <title>Upload Result</title>
        </head>
        <body>
          <h2>Hello, {encodedName}!</h2>
          <p>Your image was uploaded successfully.</p>
          <img src="{imageUrl}" alt="Uploaded image" style="max-width: 500px; height: auto;" />
          <p><a href="/">Upload another image</a></p>
        </body>
      </html>
      """,
      "text/html"
    );
  }
);

app.Run();
