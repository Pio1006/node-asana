/**
 * This file is auto-generated by our openapi spec.
 * We try to keep the generated code pretty clean but there will be lint
 * errors that are just not worth fixing (like unused requires).
 * TODO: maybe we can just disable those specifically and keep this code
 * pretty lint-free too!
 */
/* jshint ignore:start */
var Resource = require('../resource');
var util = require('util');
var _ = require('lodash');

function Goals(dispatcher) {
    Resource.call(this, dispatcher);
}
util.inherits(Goals, Resource);


/**
 * Add a collaborator to a goal
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.addFollowers = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/addFollowers";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Add a subgoal to a parent goal
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.addSubgoal = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/addSubgoal";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Add a project/portfolio as supporting work for a goal.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.addSupportingWorkForGoal = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/addSupportingWork";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Create a goal metric
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.createGoalMetric = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/setMetric";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Delete a goal
 * @param {String} goalGid: (required) Globally unique identifier for the goal.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.deleteGoal = function(
    goalGid,
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}".replace("{goal_gid}", goalGid);

    return this.dispatchDelete(path, data, dispatchOptions)
};


/**
 * Get a goal
 * @param {String} goalGid: (required) Globally unique identifier for the goal.
 * @param {Object} params: Parameters for the request
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.getGoal = function(
    goalGid,
    params,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}".replace("{goal_gid}", goalGid);

    return this.dispatchGet(path, params, dispatchOptions)
};


/**
 * Get goals
 * @param {Object} params: Parameters for the request
     - portfolio {String}:  Globally unique identifier for supporting portfolio.
     - project {String}:  Globally unique identifier for supporting project.
     - isWorkspaceLevel {Boolean}:  Filter to goals with is_workspace_level set to query value. Must be used with the workspace parameter.
     - team {String}:  Globally unique identifier for the team.
     - workspace {String}:  Globally unique identifier for the workspace.
     - offset {String}:  Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
     - limit {Number}:  Results per page. The number of objects to return per page. The value must be between 1 and 100.
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.getGoals = function(
    params,
    dispatchOptions
) {
    var path = "/goals";

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Get parent goals from a goal
 * @param {Object} params: Parameters for the request
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.getParentGoalsForGoal = function(
    params,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/parentGoals";

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Get subgoals from a goal
 * @param {Object} params: Parameters for the request
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.getSubgoalsForGoal = function(
    params,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/subgoals";

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Remove a collaborator from a goal
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.removeFollowers = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/removeFollowers";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Remove a subgoal from a goal
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.removeSubgoal = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/removeSubgoal";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Remove a project/portfolio as supporting work for a goal.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.removeSupportingWorkForGoal = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/removeSupportingWork";

    return this.dispatchPost(path, data, dispatchOptions)
};


/**
 * Get supporting work from a goal
 * @param {Object} params: Parameters for the request
     - optFields {[String]}:  Defines fields to return. Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below. The id of included objects will always be returned, regardless of the field options.
     - optPretty {Boolean}:  Provides “pretty” output. Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.supportingWork = function(
    params,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/supportingWork";

    return this.dispatchGetCollection(path, params, dispatchOptions)
};


/**
 * Update a goal
 * @param {String} goalGid: (required) Globally unique identifier for the goal.
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.updateGoal = function(
    goalGid,
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}".replace("{goal_gid}", goalGid);

    return this.dispatchPut(path, data, dispatchOptions)
};


/**
 * Update a goal metric
 * @param {Object} data: Data for the request
 * @param {Object} [dispatchOptions]: Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Goals.prototype.updateGoalMetric = function(
    data,
    dispatchOptions
) {
    var path = "/goals/{goal_gid}/setMetricCurrentValue";

    return this.dispatchPost(path, data, dispatchOptions)
};

module.exports = Goals;
/* jshint ignore:end */
