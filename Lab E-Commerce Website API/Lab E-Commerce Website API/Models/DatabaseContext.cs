using Microsoft.EntityFrameworkCore;
using Lab_E_Commerce_Website_API.Models;

namespace Lab_E_Commerce_Website_API
{
    // defines our database connection so we can interface with the database
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        public DbSet<UserAccount> userAccounts { get; set; } = null!;

        public DbSet<ItemListing> itemListings { get; set; } = default!;

        public DbSet<ItemOrder> itemOrders { get; set; } = default!;
    }
}
