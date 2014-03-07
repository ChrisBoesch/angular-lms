'use strict';

var path = require('path');
/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  res.json([
    {
      name : 'HTML5 Boilerplate',
      info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
      awesomeness: 10
    }, {
      name : 'AngularJS',
      info : 'AngularJS is a toolset for building the framework most suited to your application development.',
      awesomeness: 10
    }, {
      name : 'Karma',
      info : 'Spectacular Test Runner for JavaScript.',
      awesomeness: 10
    }, {
      name : 'Express',
      info : 'Flexible and minimalist web application framework for node.js.',
      awesomeness: 10
    }
  ]);
};

exports.discussionMeta = function(req, res) {
    res.json([
        {
            "category": "General",
            "forums": [
                {
                    "name" : "Ask the Professor",
                    "latestPost" : "03/03/2014 12:20PM EST",
                    "threadCount" : 30
                },
                {
                    "name" : "Water Cooler",
                    "latestPost" : "03/03/2014 10:20AM EST",
                    "threadCount" : 6
                },
                {
                    "name" : "Driving the Learning Deeper With John Shatzer",
                    "latestPost" : "03/03/2014 09:20AM EST",
                    "threadCount" : 1
                },
                {
                    "name" : "VoiceThread Q&A",
                    "latestPost" : "03/04/2014 11:28PM EST",
                    "threadCount" : 30
                }
            ]
        },
        {
            "category" : "Session 1",
            "forums" : [
                {
                    "name" : "Discussion Vision Statement & Assessment",
                    "latestPost" : "02/11/2013 02:28PM EST",
                    "threadCount" : 89
                }
            ]
        },
        {
            "category" : "Session 2",
            "forums" : [
                {
                    "name" : "Discussion Rubrics",
                    "latestPost" : "02/09/2014 06:30PM EST",
                    "threadCount" : 20
                }
            ]
        },
        {
            "category" : "Session 3",
            "forums" : [
                {
                    "name" : "Discussion - Hodges and Lindgard",
                    "latestPost" : "02/23/2014 02:28PM EST",
                    "threadCount" : 17
                }
            ]
        },
        {
            "category" : "Session 5",
            "forums" : [
                {
                    "name" : "Discussion Types of Assessments",
                    "latestPost" : "02/10/2013 02:18PM EST",
                    "threadCount" : 32
                }
            ]
        }
    ])
};