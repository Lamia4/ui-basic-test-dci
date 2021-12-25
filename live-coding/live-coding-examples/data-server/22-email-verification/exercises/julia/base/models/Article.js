import mongoose from "mongoose";
import User from "./User.js";

const ArticleSchema = mongoose.Schema({
	authorId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
		validate: {
			validator: function(id) {
				if(!id) return false;
				return true
			},
			message: props => `${props.value} is not valid`
		}
	},
	title: {
		type: String,
		required: true,
	},
	teaser: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
}, { versionKey: false });

ArticleSchema.post('findOneAndDelete', async (article) => {
	console.log('**** Article Post');
	if (!article) return console.log('ArticleSchema.post.findOneAndDelete: no article deleted => no further action required');
	
	await User.removeArticleFromReadingLists(article._id);
});

const Article = mongoose.model("Article", ArticleSchema);

async function deleteById(id){
	return await Article.findByIdAndDelete(id);
}

async function deleteManyByAuthorId(id){
	return await Article.deleteMany({authorId: id});
}

async function readAll () {
	return await Article.find().populate('authorId');
}

async function readOne (id) {
	return await Article.findById(id).populate('authorId');
}

async function write (authorId, title, teaser, text) {
	const article = new Article({
		authorId,
		title,
		teaser,
        text,
	});

	return await article.save();
}

async function updateCredentials (email, password) {
	return null;
}

async function addArticleToReadingList (ArticleId, articleId) {
	return null;
}

async function markArticleAsRead (ArticleId, articleId) {
	return null;
}

export default {
	deleteById,
	deleteManyByAuthorId,
	readAll,
    readOne,
	updateCredentials,
	addArticleToReadingList,
	markArticleAsRead,
	write,
};
