'use strict';

SocialNetwork.factory('postService',
    function($http, baseServiceUrl) {
        var service = {};

        service.params = {};

        var serviceUrl =    baseServiceUrl + '/Posts/';

        service.addPost = function(postData, headers, success, error) {
            $http.post(serviceUrl, postData, {headers: headers})
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.getUserPosts = function(startPostId, pageSize, id, headers, success, error) {
            if(!startPostId) {
                $http.get(baseServiceUrl + '/users/' + id + '/wall?PageSize=' + pageSize, { headers: headers})
                    .success(function (data, status, headers, config) {
                        success(data);
                    }).error(error);
            } else {
                $http.get(baseServiceUrl + '/users/' + id + '/wall?StartPostId=' + startPostId + '&PageSize=' + pageSize, { headers: headers})
                    .success(function (data, status, headers, config) {
                        success(data);
                    }).error(error);
            }

        };

        service.getNewsFeed = function(startPostId, pageSize, headers, success, error) {
            if(!startPostId) {
                $http.get(baseServiceUrl + '/me/feed?PageSize=' + pageSize, { headers: headers})
                    .success(function (data, status, headers, config) {
                        success(data);
                    }).error(error);
            } else {
                $http.get(baseServiceUrl + '/me/feed?StartPostId=' + startPostId + '&PageSize=' + pageSize, { headers: headers})
                    .success(function (data, status, headers, config) {
                        success(data);
                    }).error(error);
            }

        };

        service.getPostDetailedLikes = function(postId, headers, success, error) {
            $http.get(serviceUrl + postId + '/likes', {headers: headers})
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.getCommentDetailedLikes = function(postId, commentId, headers, success, error) {
            $http.get(serviceUrl + postId + '/comments/' + commentId + '/likes', {headers: headers})
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.deletePost = function(id, headers, success, error) {
            $http.delete(serviceUrl + id, { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.editPost = function(id, data, headers, success, error) {
            $http.put(serviceUrl + id, data, { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.likePost = function(id, headers, success, error) {
            $http.post(serviceUrl + id + '/likes', null, { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.unlikePost = function(id, headers, success, error) {
            $http.delete(serviceUrl + id + '/likes', { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.addCommentToPost = function(id, data, headers, success, error) {
            $http.post(serviceUrl + id + '/comments', data, { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.deleteCommentOnPost = function(commentId, postId, headers, success, error) {
            $http.delete(serviceUrl + postId + '/comments/' + commentId, { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.editCommentOnPost = function(commentId, postId, data, headers, success, error) {
            $http.put(serviceUrl + postId + '/comments/' + commentId, data, { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.likeCommentOnPost = function(commentId, postId, headers, success, error) {
            $http.post(serviceUrl + postId + '/comments/' + commentId + '/likes', null, { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.unlikeCommentOnPost = function(commentId, postId, headers, success, error) {
            $http.delete(serviceUrl + postId + '/comments/' + commentId + '/likes', { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        service.showAllCommentsOnPost = function(postId, headers, success, error) {
            $http.get(serviceUrl + postId + '/comments/', { headers: headers })
                .success(function (data, status, headers, config) {
                    success(data);
                }).error(error);
        };

        return service;
    }
);