namespace Lab_E_Commerce_Website_API.Models
{
    // The model for an item listing
    // This is how we access the data in the database about the items currently listed or previously listed on the website
    public class ItemOrder
    {
        public int id { get; set; }

        public int postedUserID { get; set; }

        public string? listingName { get; set; }

        public string? listingDescription { get; set; }

        public string? listingPrice { get; set; }

        public string? amountOfItem { get; set; }

        public string? category { get; set; }

        public int purchasedUserID { get; set; }

        public DateTime dateOfPurchase { get; set; }

        public DateTime dateOfPosting { get; set; }
    }
}
