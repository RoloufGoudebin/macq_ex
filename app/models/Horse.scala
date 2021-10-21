package models

import org.joda.time.DateTime
import play.api.libs.json.{Format, Json}
import reactivemongo.play.json._
import reactivemongo.bson.BSONObjectID
import reactivemongo.bson._
import play.api.libs.json.JodaWrites._
import play.api.libs.json.JodaReads._



case class Horse(
                  _id:Option[BSONObjectID],
                  _creationDate: Option[DateTime],
                  _updateDate: Option[DateTime],
                  name: String,
                  colour: String,
                  speed: String,
                  breed: String,
                  img: String,
                )
object Horse{
  implicit val fmt : Format[Horse] = Json.format[Horse]
  implicit object HorseBSONReader extends BSONDocumentReader[Horse] {
    def read(doc: BSONDocument): Horse = {
      Horse(
        doc.getAs[BSONObjectID]("_id"),
        doc.getAs[BSONDateTime]("_creationDate").map(dt => new DateTime(dt.value)),
        doc.getAs[BSONDateTime]("_updateDate").map(dt => new DateTime(dt.value)),
        doc.getAs[String]("name").get,
        doc.getAs[String]("colour").get,
        doc.getAs[String]("speed").get,
        doc.getAs[String]("breed").get,
        doc.getAs[String]("img").get,
        )
    }
  }

  implicit object HorseBSONWriter extends BSONDocumentWriter[Horse] {
    def write(horse: Horse): BSONDocument = {
      BSONDocument(
        "_id" -> horse._id,
        "_creationDate" -> horse._creationDate.map(date => BSONDateTime(date.getMillis)),
        "_updateDate" -> horse._updateDate.map(date => BSONDateTime(date.getMillis)),
        "name" -> horse.name,
        "colour" -> horse.colour,
        "speed" -> horse.speed,
        "breed" -> horse.breed,
        "img" -> horse.img
      )
    }
  }
}