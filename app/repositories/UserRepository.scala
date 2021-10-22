package repositories

import models.User
import javax.inject._
import reactivemongo.api.bson.collection.BSONCollection
import play.modules.reactivemongo.ReactiveMongoApi
import scala.concurrent.{ExecutionContext, Future}
import reactivemongo.api.{Cursor, ReadPreference}
import reactivemongo.bson.{BSONDocument, BSONObjectID}
import reactivemongo.api.commands.WriteResult
import org.joda.time.DateTime

@Singleton
class UserRepository @Inject()(implicit executionContext: ExecutionContext, reactiveMongoApi: ReactiveMongoApi) {

  def collection: Future[BSONCollection] = reactiveMongoApi.database.map(db => db.collection("users"))


  /*CRUD*/
  def create(user: User): Future[WriteResult] = {
    collection.flatMap(_.insert(ordered = false)
      .one(user.copy(_creationDate = Some(new DateTime()), _updateDate = Some(new DateTime()))))
  }

  def findAll(limit: Int = 100): Future[Seq[User]] = {
    collection.flatMap(
      _.find(BSONDocument(), Option.empty[User])
        .cursor[User](ReadPreference.Primary)
        .collect[Seq](limit, Cursor.FailOnError[Seq[User]]())
    )
  }

  def findOne(id: BSONObjectID): Future[Option[User]] = {
    collection.flatMap(_.find(BSONDocument("_id" -> id), Option.empty[User]).one[User])
  }


  def update(id: BSONObjectID, user: User):Future[WriteResult] = {
    collection.flatMap(
      _.update(ordered = false).one(BSONDocument("_id" -> id),
        user.copy(
          _updateDate = Some(new DateTime())))
    )
  }

  def delete(id: BSONObjectID):Future[WriteResult] = {
    collection.flatMap(
      _.delete().one(BSONDocument("_id" -> id), Some(1))
    )
  }


}