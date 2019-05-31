# README

## userテーブル
|Column|Type|Options|
|------|----|-------|
|name|text|         |
|email|VARCHAR(M)|  |  
|pass|INT|          |


### Association
- has_many :messages
- has_many :groups


## membersテーブル

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

 - has_many :user


