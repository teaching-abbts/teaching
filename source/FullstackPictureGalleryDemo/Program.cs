using FullstackPictureGalleryDemo;

using Mumrich.SpaDevMiddleware.Extensions;

var builder = WebApplication.CreateBuilder(args);
var appSettings = builder.Configuration.Get<AppSettings>();

ArgumentNullException.ThrowIfNull(appSettings);

builder.SetupSpaMiddleware(appSettings);

var app = builder.Build();

app.MapSinglePageApps(appSettings);

app.Run();
