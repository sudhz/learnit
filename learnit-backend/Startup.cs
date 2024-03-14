// using Microsoft.AspNetCore.Builder;
// using Microsoft.AspNetCore.Hosting;
// using Microsoft.Extensions.Configuration;
// using Microsoft.Extensions.DependencyInjection;
// using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore.SqlServer;
using Learnit_Backend.Data;
// using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
// using Learnit_Backend.Models;
// using Microsoft.AspNetCore.Http;

namespace Learnit_Backend // Adjust the namespace according to your project structure
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Register the database context
            // Register the database context
            services.AddDbContext<LearnitDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("LearnitDatabase"), sqlServerOptions =>
               {
                   // Ignore certificate validation errors
                   //sqlServerOptions.TrustServerCertificate(true);
               });
            });


            services.AddControllersWithViews();

            services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                {
                    builder
                    .AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseCors("AllowAll");

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "student",
                    pattern: "Student/{action=Index}/{id?}",
                    defaults: new { controller = "Student" });

                endpoints.MapControllerRoute(
                    name: "instructor",
                    pattern: "Instructor/{action=Index}/{id?}",
                    defaults: new { controller = "Instructor" });

                endpoints.MapControllerRoute(
                    name: "course",
                    pattern: "Course/{action=Index}/{id?}",
                    defaults: new { controller = "Course" });

                endpoints.MapControllerRoute(
                    name: "comment",
                    pattern: "Comment/{action=Index}/{id?}",
                    defaults: new { controller = "Comment" });

                endpoints.MapControllerRoute(
                    name: "comment",
                    pattern: "Comment/{action=Index}/{id?}",
                    defaults: new { controller = "Comment" });

                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
            });

            // Additional endpoint to verify server is running and data is being fetched
            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Server is running and data is being fetched!");
            });
        }
    }
}
