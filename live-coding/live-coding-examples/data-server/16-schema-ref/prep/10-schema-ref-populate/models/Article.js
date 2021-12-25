import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
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

const Article = mongoose.model("Article", ArticleSchema);

async function deleteById(id) {
	return await Article.findByIdAndDelete(id);
}

async function readAll() {
	return await Article.find().populate('author');
}

async function readOne(id) {
	return await Article.findById(id).populate('author');
}

async function write(title, teaser, text) {
	const article = new Article({
		title,
		teaser,
		text,
	});

	return await article.save();
}

async function updateById(id, changedArticle) {
	return await Article.findByIdAndUpdate(id, changedArticle);
}

async function addArticleToReadingList(ArticleId, articleId) {
	return null;
}

async function markArticleAsRead(ArticleId, articleId) {
	return null;
}

export default {
	deleteById,
	readAll,
    readOne,
	updateById,
	addArticleToReadingList,
	markArticleAsRead,
};
