import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
	authorId: {
		type: String,
		ref: 'User',
		required: true
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

async function deleteByAuthorId(id) {
	return await Article.deleteMany({ authorId: id });
}

async function readAll() {
	return await Article.find().populate('authorId');
}

async function readOne(id) {
	return await Article.findById(id).populate('authorId');
}

async function write(authorId, title, teaser, text) {
	const article = new Article({
		authorId,
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
	deleteByAuthorId,
	readAll,
    readOne,
	updateById,
	addArticleToReadingList,
	markArticleAsRead,
	write,
};
