using Mumrich.SpaDevMiddleware.Domain.Contracts;
using Mumrich.SpaDevMiddleware.Domain.Models;

namespace FullstackPictureGalleryDemo;

public class AppSettings : ISpaMiddlewareSettings
{
  public Dictionary<string, SpaSettings> SinglePageApps { get; set; } = [];
  public string BasePublicPath { get; set; } = Directory.GetCurrentDirectory();
}