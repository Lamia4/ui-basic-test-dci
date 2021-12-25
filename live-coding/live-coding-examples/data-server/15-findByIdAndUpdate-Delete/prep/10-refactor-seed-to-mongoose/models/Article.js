import mongoose from "mongoose";

const ArticleSchema = mongoose.Schema({
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

ArticleSchema.statics.readAll = async function () {
	return await this.find({});
}

ArticleSchema.statics.readOne = async function(id) {
	return await this.findById(id);
}

ArticleSchema.statics.write = async function(title, teaser, text) {
	const article = new Article({
		title,
		teaser,
        text,
	});

	return await article.save();
}

ArticleSchema.methods.addArticleToReadingList = async function(ArticleId, articleId) {
	return null;
}

ArticleSchema.methods.markArticleAsRead = async function(ArticleId, articleId) {
	return null;
}


// export default {
	// 	readAll,
	//     readOne,
	// 	addArticleToReadingList,
	// 	markArticleAsRead,
	// };


const Article = mongoose.model("Article", ArticleSchema);

export default Article;
