# README


## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|         |
|email|VARCHAR(M)|  |  
|pass|INT|          |


### Association   
- has_many :users, through: :group_users
- has_many :group_users




## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
 - belongs_to :group
 - belongs_to :user


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body  |text|       |
|image |string|     |
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|

### Association

 - belongs_to :user
 

 ## groupテーブル
 |Column|Type|Options|
 |------|----|-------|
 |groupname|text|    |
 |user_id|integer|null: false, foreign_key: true|

### Association

 - has_many :users, through: :group_users
 - has_many :group_users
   accepts_nested_attributes_for :group_users


