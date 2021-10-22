package models

import org.joda.time.DateTime
import play.api.libs.json.{Format, Json}
import reactivemongo.play.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.bson._
import play.api.libs.json.JodaWrites._
import play.api.libs.json.JodaReads._



case class User(
                  _id:Option[BSONObjectID],
                  _creationDate: Option[DateTime],
                  _updateDate: Option[DateTime],
                  name: String,
                  mail: String,
                  pwd: String,
                )
object User{
  implicit val fmt : Format[User] = Json.format[User]
  implicit object UserBSONReader extends BSONDocumentReader[User] {
    def read(doc: BSONDocument): User = {
      User(
        doc.getAs[BSONObjectID]("_id"),
        doc.getAs[BSONDateTime]("_creationDate").map(dt => new DateTime(dt.value)),
        doc.getAs[BSONDateTime]("_updateDate").map(dt => new DateTime(dt.value)),
        doc.getAs[String]("name").get,
        doc.getAs[String]("mail").get,
        doc.getAs[String]("pwd").get
        )
    }
  }

  implicit object UserBSONWriter extends BSONDocumentWriter[User] {
    def write(user: User): BSONDocument = {
      BSONDocument(
        "_id" -> user._id,
        "_creationDate" -> user._creationDate.map(date => BSONDateTime(date.getMillis)),
        "_updateDate" -> user._updateDate.map(date => BSONDateTime(date.getMillis)),
        "name" -> user.name,
        "mail" -> user.mail,
        "pwd" -> user.pwd
      )
    }
  }
}