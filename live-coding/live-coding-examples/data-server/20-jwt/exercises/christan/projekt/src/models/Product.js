import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema({
  name: { 
	  type: String, 
	  lowercase: true , 
	  required: true
	},
  brandId: {
	  type: mongoose.Schema.ObjectId,
	  ref: 'Brand'
	},
  styleId: {
	  type: mongoose.Schema.ObjectId, 
	  ref: 'Style'
	},
  year: { 
	  type: Number 
	}, 
  avgRating: {
	  type: Number
	}
}, { versionKey: false });

const Product = mongoose.model('Product', ProductSchema);


//----- funciones -------//

async function create (name, brandId, styleId, year, avgRating) {
	
	const product = new Product({
		name,
		brandId,
		styleId,
		year,
		avgRating,
	});
	
		await product.save(function (err, product) {
			if (err) return console.error(err, 'product:', product, 'could not be saved');
			console.log('product saved');
		});
	}

async function deleteById(id){
	return await Product.findByIdAndDelete(id);
}
	
async function publish () {
	// ....

}

async function readOne (id) {
	return await Product.findById(id);
}

async function unpublish () {
	// ....
}


//async function salereduce () {
	// ....
//}


export default {
	create,
	deleteById,
	publish,
	readOne,
	unpublish,
};
