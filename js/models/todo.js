/*global Backbone */
var app = app || {};

(function ()
{
	'use strict';

	// Todo Model
	// ----------

	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend
    ({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults:
        {
			title: '',
			completed: false,
            maxPriority: 2,
            lowPriority: 0,
            normalPriority: 1,
            highPriority: 2,
            priority: 1
		},

		// Toggle the `completed` state of this todo item.
		toggle: function ()
        {
			this.save
            ({
				completed: !this.get('completed')
			});
		},

        // Toggle the `priority` state of this todo item.
        togglePriority: function ()
        {
            this.save
            ({
                priority: this.get('priority') + 1
            });
        }
	});
})();
