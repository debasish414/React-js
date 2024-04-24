import conf from '../conf/conf'
import { Client, Id, Databases, Storage, Query } from 'appwrite'

export class Service {
    client = new Client()
    database;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appWriteURL)
            .setProject(conf.appWriteProjectID)
        this.database = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.database.createDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                // Id.unique(), /* Automatically creates a unique ID */
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
        }
    }

    async updataPost(slug, { title, content, featuredImage, status, }) {
        try {
            return await this.database.updateDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
            return false
        }
    }

    // for get a single post
    async getPost(slug) {
        try {
            return await this.database.getDocument(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
            return false
        }
    }

    // for get all posts
    async getAllPosts() {
        try {
            return await this.database.listDocuments(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID
            )
        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
            return false
        }
    }

    async getPosts(quaries = [Query.equal("status", "active")]) {
        try {
            return await this.database.listDocuments(
                conf.appWriteDatabaseID,
                conf.appWriteCollectionID,
                quaries,
            )
        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
            return false
        }
    }

    // file upload service
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketID,
                Id.unique(),
                file
            )

        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
            return false
        }
    }

    async deletePost(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketID,
                fileId
            )
        } catch (error) {
            console.log("Appweite serive :: createPost :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketID,
            fileId
        )
    }
}



const service = new Service()
export default service