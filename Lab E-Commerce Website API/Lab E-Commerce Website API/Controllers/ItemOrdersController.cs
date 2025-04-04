using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Lab_E_Commerce_Website_API.Models;

// this is a controller to handle the API requests from the front end about listings
// so if the front end accesses https://<ip>:<port>/UserAccounts in different ways,
// different things will happen (get, post, delete http requests)
namespace Lab_E_Commerce_Website_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemOrdersController : ControllerBase
    {
        private readonly DatabaseContext _context;

        public ItemOrdersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/ItemListings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ItemOrder>>> GetItemOrders()
        {
            return await _context.itemOrders.ToListAsync();
        }

        // GET: api/ItemListings/<any listing id>
        [HttpGet("{id}")]
        public async Task<ActionResult<ItemOrder>> GetItemOrders(int id)
        {
            var itemOrder = await _context.itemOrders.FindAsync(id);

            if (itemOrder == null)
            {
                return NotFound();
            }

            return itemOrder;
        }

        // PUT: api/ItemListings/<any listing id>
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItemOrder(int id, ItemOrder itemOrder)
        {
            if (id != itemOrder.id)
            {
                return BadRequest();
            }

            _context.Entry(itemOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemOrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ItemListings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ItemOrder>> PostItemOrder(ItemOrder itemOrder)
        {
            _context.itemOrders.Add(itemOrder);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetItemListing", new { id = itemOrder.id }, itemOrder);
        }

        // DELETE: api/ItemListings/<any listing id>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItemOrder(int id)
        {
            var itemOrder = await _context.itemOrders.FindAsync(id);
            if (itemOrder == null)
            {
                return NotFound();
            }

            _context.itemOrders.Remove(itemOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemOrderExists(int id)
        {
            return _context.itemOrders.Any(e => e.id == id);
        }
    }
}
