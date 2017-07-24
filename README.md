# musicConnects-web
[![Build Status](https://travis-ci.org/onebytecode/musicConnects-web.svg?branch=master)](https://travis-ci.org/onebytecode/musicConnects-web)
* Todo
//
# API DOCUMENTATION
### GRAPHQL

| method | params | result |
| ------ | ------ | ------ |
| getUser | id:Int  | name age bands artists |
| createUser | name:String age:String bands:[Int] artists[Int] | id name age bands  |
| getBand | id:Int | id name subscribers |
| createBand | name:String subscribers:[Int] | name subscribers |
| getArtist | naming: { firstName, secondName, surname } bands: { belong:Int } | naming bands |
