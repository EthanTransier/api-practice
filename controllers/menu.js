const {Menu} = require('../data.js');

const readMenu = async (req, res) => {
  try {
    res.json({success: true, data:Menu});
  } catch (e) {
    console.log(e);
  }
};

const readItem = async (req, res) => {
    try {
        console.log('finding item')
        const {id} = req.params
        var foundItem = '';
        for(let i = 0; i < Menu.length; i++) {
            // console.log(Menu[i].id)
            // console.log(id)
            if(Menu[i].id == id){
                console.log('found item')
                foundItem = Menu[i];
            }
        }
        res.json({success: true, data:foundItem});
    } catch (e) {
        console.log(e);
    }
}

const createMenu = async (req, res) => {
  try {
    // Assuming req.body contains the new menu item data
    const newItem = req.body;
    Menu.push(newItem);

    // Respond with the updated menu
    res.json(Menu);
  } catch (e) {
    console.log(e);
  }
};

const updateMenu = async (req, res) => {
  try {
    const itemId = req.params.id;
    
    // Find the menu item by ID and update it (assuming you have a function to do this)
    // Example: const updatedItem = updateMenuItemById(itemId, req.body);

    // Respond with the updated menu
    res.json(Menu);
  } catch (e) {
    console.log(e);
  }
};

const deleteMenu = async (req, res) => {
  try {
    const itemId = req.params.id;
    
    // Find and remove the menu item by ID (assuming you have a function to do this)
    // Example: const deletedItem = deleteMenuItemById(itemId);

    // Respond with the updated menu
    res.json(Menu);
  } catch (e) {
    console.log(e);
  }
};


module.exports = {readMenu, readItem, createMenu, updateMenu, deleteMenu}