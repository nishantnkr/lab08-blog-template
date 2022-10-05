(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var createStore = require('./helpers/createStore');
var Root = React.createFactory(require('./components/Root'));

var moment = require('moment');
var timeActionCreators = require('./reducers/time');

var combinedReducers = require('./reducers');

// TODO Section 6: Change code below to get data from the API

window.main = function (initialState) {
  // Create root React component with Redux store
  var store = createStore(initialState);
  var rootComponent = Root({ store: store });

  // Mount React root component in DOM
  var mountPoint = document.getElementById('root');
  ReactDOM.render(rootComponent, mountPoint);

  window.setInterval(function () {
    var now = moment().format();
    store.dispatch(timeActionCreators.setCurrentTime(now));
  }, 10000);
};

},{"./components/Root":9,"./helpers/createStore":13,"./reducers":14,"./reducers/time":16,"moment":"moment","react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReduxDevtools = require('redux-devtools');
var DockMonitor = require('redux-devtools-dock-monitor').default;
var LogMonitor = require('redux-devtools-log-monitor').default;

var _DevTools = ReduxDevtools.createDevTools(React.createElement(
  DockMonitor,
  { toggleVisibilityKey: 'h', changePositionKey: 'q', defaultIsVisible: true },
  React.createElement(LogMonitor, null)
));

var DevTools = function (_React$Component) {
  _inherits(DevTools, _React$Component);

  function DevTools(props) {
    _classCallCheck(this, DevTools);

    var _this = _possibleConstructorReturn(this, (DevTools.__proto__ || Object.getPrototypeOf(DevTools)).call(this, props));

    _this.state = { isMounted: false };
    return _this;
  }

  _createClass(DevTools, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.isMounted && React.createElement(_DevTools, null)
      );
    }
  }], [{
    key: 'instrument',
    value: function instrument() {
      return _DevTools.instrument(arguments);
    }
  }]);

  return DevTools;
}(React.Component);

;

/**
 * Redux development tools (useful for debugging).
 */
module.exports = DevTools;

},{"react":"react","redux-devtools":"redux-devtools","redux-devtools-dock-monitor":"redux-devtools-dock-monitor","redux-devtools-log-monitor":"redux-devtools-log-monitor"}],3:[function(require,module,exports){
'use strict';

var React = require('react');

var PostList = require('./PostList');

/**
 * The guts of the home page.
 */
var Home = function Home() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'blog-header' },
      React.createElement(
        'h1',
        { className: 'blog-title' },
        'An Example of a Blog'
      ),
      React.createElement(
        'p',
        { className: 'lead blog-description' },
        'React and Redux and Bootstrap, oh my!'
      )
    ),
    React.createElement(PostList, null)
  );
};

module.exports = Home;

},{"./PostList":6,"react":"react"}],4:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');

var PostEdit = require('./PostEdit');
var PostView = require('./PostView');

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    _classCallCheck(this, Post);

    // Set initial internal state for this component
    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this.state = { editing: false };
    return _this;
  }

  _createClass(Post, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openEdit = function openEdit() {
        _this2.setState({ editing: true });
      };

      var closeEdit = function closeEdit() {
        _this2.setState({ editing: false });
      };

      var saveEdit = function saveEdit(editedPost) {
        _this2.props.savePost(editedPost, function (err) {
          if (!err) closeEdit();
        });
      };
      var deleteThisPost = function deleteThisPost() {
        _this2.props.deletePost(_this2.props.post.id);
      };

      // TODO Section 8: Add code for delete

      if (this.state.editing) {
        // Render component for editing the post
        return React.createElement(PostEdit, {
          post: this.props.post,
          onSave: saveEdit,
          onCancel: closeEdit
        });
      }
      // Render read-only view of the post
      // TODO Section 8: add code for delete
      return React.createElement(PostView, {
        post: this.props.post,
        time: this.props.time,
        onDelete: deleteThisPost,
        onEdit: openEdit
      });
    }
  }]);

  return Post;
}(React.Component);

// Export the Post component


module.exports = Post;

},{"./PostEdit":5,"./PostView":8,"react":"react"}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var _ = require('lodash');

/**
 * A form for editing a blog post.
 */

var PostEdit = function (_React$Component) {
  _inherits(PostEdit, _React$Component);

  function PostEdit(props) {
    _classCallCheck(this, PostEdit);

    var _this = _possibleConstructorReturn(this, (PostEdit.__proto__ || Object.getPrototypeOf(PostEdit)).call(this, props));

    var post = props.post || {};

    _this.state = {
      title: post.title || '',
      content: post.content || ''
    };
    return _this;
  }

  _createClass(PostEdit, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var revertAndStopEditing = function revertAndStopEditing(event) {
        event.preventDefault();
        _this2.props.onCancel();
      };

      var submitAndStopEditing = function submitAndStopEditing(event) {
        event.preventDefault();
        // Creates a new post object and saves it.
        var editedPost = _.assign({}, _this2.props.post, {
          title: _this2.state.title,
          content: _this2.state.content
        });
        _this2.props.onSave(editedPost);
      };

      var onTitleChange = function onTitleChange(event) {
        _this2.setState({ title: event.target.value });
      };

      var onContentChange = function onContentChange(event) {
        _this2.setState({ content: event.target.value });
      };

      return React.createElement(
        'form',
        { className: 'blog-post' },
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('input', { className: 'form-control input-lg', value: this.state.title,
            placeholder: 'Post title', onChange: onTitleChange
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', {
            className: 'form-control',
            style: { height: 300 },
            value: this.state.content,
            onChange: onContentChange
          })
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            onClick: submitAndStopEditing
          },
          'Save'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-default pull-right',
            style: { marginRight: '12px' },
            onClick: revertAndStopEditing
          },
          'Cancel'
        )
      );
    }
  }]);

  return PostEdit;
}(React.Component);

module.exports = PostEdit;

},{"lodash":"lodash","react":"react"}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var ReactRedux = require('react-redux');
var _ = require('lodash');

var postsActionCreators = require('../reducers/posts');
var createActionDispatchers = require('../helpers/createActionDispatchers');
var Post = require('./Post');
var PostNew = require('./PostNew');

/**
 * A list of blog posts, along with buttons for writing a new post
 * and loading more posts.
 */

var PostList = function (_React$Component) {
  _inherits(PostList, _React$Component);

  function PostList(props) {
    _classCallCheck(this, PostList);

    // Set initial internal state for this component
    var _this = _possibleConstructorReturn(this, (PostList.__proto__ || Object.getPrototypeOf(PostList)).call(this, props));

    _this.state = { loading: false };
    return _this;
  }

  _createClass(PostList, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var onLoadButtonClick = function onLoadButtonClick() {
        // If we are not already in the process of loading posts,
        // start loading more posts.
        if (!_this2.state.loading) {
          _this2.setState({ loading: true });
          _this2.props.loadMorePosts(function () {
            _this2.setState({ loading: false });
          });
        }
      };

      // Function which creates a post component from a post ID
      var createPostComponent = function createPostComponent(currentPost) {
        /* TODO Section 8: Add code for delete */
        return React.createElement(Post, {
          key: currentPost.id,
          post: currentPost,
          time: _this2.props.time,
          savePost: _this2.props.savePost,
          deletePost: _this2.props.deletePost
        });
      };

      return React.createElement(
        'div',
        { className: 'row' },
        React.createElement(
          'div',
          { className: 'blog-main' },
          React.createElement(PostNew, {
            createPost: this.props.createPost
          }),
          /* TODO Section 3: Write code to list all the posts */
          this.props.posts.visiblePosts.map(createPostComponent),
          React.createElement(
            'button',
            { className: 'blog-load-more btn btn-default btn-lg',
              onClick: onLoadButtonClick,
              disabled: this.state.loading
            },
            this.state.loading ? 'Loading...' : 'Load more posts'
          )
        )
      );
    }
  }]);

  return PostList;
}(React.Component);

// Connect PostList component to the Redux store


var PostListContainer = ReactRedux.connect(
// Map store state to props
function (state) {
  return {
    posts: state.posts,
    time: state.time
  };
}, createActionDispatchers(postsActionCreators))(PostList);

module.exports = PostListContainer;

},{"../helpers/createActionDispatchers":12,"../reducers/posts":15,"./Post":4,"./PostNew":7,"lodash":"lodash","react":"react","react-redux":"react-redux"}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var PostEdit = require('./PostEdit');

/**
 * A button which expands into a form for writing a new post.
 */

var PostNew = function (_React$Component) {
  _inherits(PostNew, _React$Component);

  function PostNew(props) {
    _classCallCheck(this, PostNew);

    // Set initial internal state for this component
    var _this = _possibleConstructorReturn(this, (PostNew.__proto__ || Object.getPrototypeOf(PostNew)).call(this, props));

    _this.state = { editing: false };
    return _this;
  }

  _createClass(PostNew, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var openEdit = function openEdit() {
        _this2.setState({ editing: true });
      };

      var closeEdit = function closeEdit() {
        _this2.setState({ editing: false });
      };

      var createPost = function createPost(newPost) {
        _this2.props.createPost(newPost, function (err) {
          if (!err) closeEdit();
        });
      };

      // TODO Section 7: Write code to switch to edit mode when editing is clicked
      if (this.state.editing) {
        return React.createElement(PostEdit, {
          post: this.props.post,
          onSave: createPost,
          onCancel: closeEdit
        });
      }

      return React.createElement(
        'button',
        { className: 'blog-load-more btn btn-primary btn-lg',
          onClick: openEdit
        },
        'Write new post'
      );
    }
  }]);

  return PostNew;
}(React.Component);

module.exports = PostNew;

},{"./PostEdit":5,"react":"react"}],8:[function(require,module,exports){
'use strict';

var React = require('react');
var moment = require('moment');

/**
 * Render edit/delete buttons and post timestamp.
 *
 * List of props: post, time, onEdit, onDelete
 */
var PostMeta = function PostMeta(props) {
  return React.createElement(
    'div',
    { className: 'blog-post-meta' },
    React.createElement(
      'a',
      { role: 'button', title: 'Edit post',
        style: { paddingRight: '8px' },
        onClick: props.onEdit
      },
      React.createElement('span', { className: 'fa fa-edit' })
    ),
    React.createElement(
      'a',
      { role: 'button', title: 'Delete post',
        style: { paddingRight: '8px' },
        onClick: props.onDelete
      },
      React.createElement('span', { className: 'fa fa-remove' })
    ),
    moment(props.post.createdAt).from(props.time.now)
  );
};

/**
 * A read-only view of a blog post.
 * This is a stateless functional component.
 * It takes props as its args and returns what the render method would return.
 *
 * List of props: post, time, onEdit, onDelete
 */
var PostView = function PostView(props) {
  return React.createElement(
    'div',
    { className: 'blog-post' },
    React.createElement(
      'h2',
      { className: 'blog-post-title' },
      props.post.title
    ),
    React.createElement(PostMeta, props),
    React.createElement(
      'div',
      { className: 'blog-post-content' },
      props.post.content
    )
  );
};

module.exports = PostView;

},{"moment":"moment","react":"react"}],9:[function(require,module,exports){
'use strict';

/**
 * The root React component from which all other components on the page are
 * descended. It is this component which is directly mounted on the DOM.
 */

var React = require('react');
var ReactRedux = require('react-redux');

var Provider = ReactRedux.Provider;
var Home = require('./Home');

// Enable development tools when in development mode
var DevTools = 'span';
if ("development" === 'development') {
  DevTools = require('./DevTools');
}

// Define the Root component
var Root = function Root(props) {
  return (
    /* The Provider gives descendants the ability to connect to the Redux store */
    React.createElement(
      Provider,
      { store: props.store },
      React.createElement(
        'div',
        null,
        React.createElement(Home, null),
        React.createElement(DevTools, null)
      )
    )
  );
};

module.exports = Root;

},{"./DevTools":2,"./Home":3,"react":"react","react-redux":"react-redux"}],10:[function(require,module,exports){
'use strict';

var ajax = {};

if (true) {
  ajax.request = function (opts) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('error', function () {
        reject(new Error('Request failed'));
      });
      xhr.addEventListener('load', function () {
        if (xhr.status !== 200) {
          reject(new Error('Received status ' + xhr.status));
        } else {
          resolve(opts.json ? JSON.parse(xhr.responseText) : xhr.responseText);
        }
      });
      xhr.open(opts.method, opts.url);
      if (opts.json) {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(opts.data !== undefined ? JSON.stringify(opts.data) : opts.data);
      } else {
        xhr.send(opts.data);
      }
    });
  };
} else {
  var request = require('request');

  ajax.request = function (opts) {
    return new Promise(function (resolve, reject) {
      request({
        url: opts.url,
        method: opts.method,
        body: opts.data,
        json: opts.json
      }, function (error, response, body) {
        if (error) {
          reject(error);
        } else if (response.statusCode !== 200) {
          reject(new Error('Received status ' + response.statusCode));
        } else {
          resolve(body);
        }
      });
    });
  };
}

module.exports = ajax;

},{"request":"request"}],11:[function(require,module,exports){
'use strict';

var ajax = require('./ajax');

var api = {};

if (true) {
  api.baseUrl = '/api';
} else {
  api.baseUrl = 'http://api:3000';
}

api.get = function (path) {
  return ajax.request({
    method: 'GET',
    url: this.baseUrl + path,
    json: true
  });
};

api.post = function (path, data) {
  return ajax.request({
    method: 'POST',
    url: this.baseUrl + path,
    json: true,
    data: data
  });
};

api.put = function (path, data) {
  return ajax.request({
    method: 'PUT',
    url: this.baseUrl + path,
    json: true,
    data: data
  });
};

api.delete = function (path) {
  return ajax.request({
    method: 'DELETE',
    url: this.baseUrl + path,
    json: true
  });
};

module.exports = api;

},{"./ajax":10}],12:[function(require,module,exports){
'use strict';

var _ = require('lodash');

module.exports = function () {
  // Get an array of arguments passed into this function
  var actionCreatorsArray = _.assign([], arguments);

  // Return a function that, when given a dispatch function, returns an
  // object containing a bunch of action dispatchers
  return function (dispatch) {
    return (
      // Iterate over actionCreatorsArray, which is an array of arrays of action
      // creators
      actionCreatorsArray.reduce(function (actionDispatchers, actionCreators) {
        // Add an action dispatcher for each action creator in actionCreators
        Object.keys(actionCreators).filter(function (name) {
          return typeof actionCreators[name] === 'function';
        }).forEach(function (name) {
          actionDispatchers[name] = function () {
            return dispatch(actionCreators[name].apply(this, arguments));
          };
        });
        return actionDispatchers;
      }, {})
    );
  };
};

},{"lodash":"lodash"}],13:[function(require,module,exports){
'use strict';

var Redux = require('redux');
var reduxThunk = require('redux-thunk').default;
var combinedReducers = require('../reducers');

var enhancer = void 0;

if ("development" === 'production') {
  enhancer = Redux.applyMiddleware(reduxThunk);
} else {
  var DevTools = require('../components/DevTools');

  enhancer = Redux.compose(
  // Enables middleware
  Redux.applyMiddleware(reduxThunk),
  // Enables DevTools
  DevTools.instrument());
}

module.exports = function (initialState) {
  var store = Redux.createStore(combinedReducers, initialState, enhancer);
  return store;
};

},{"../components/DevTools":2,"../reducers":14,"redux":"redux","redux-thunk":"redux-thunk"}],14:[function(require,module,exports){
'use strict';

var Redux = require('redux');

var posts = require('./posts');
var time = require('./time');

module.exports = Redux.combineReducers({
  posts: posts,
  time: time
});

},{"./posts":15,"./time":16,"redux":"redux"}],15:[function(require,module,exports){
'use strict';

var _ = require('lodash');
var api = require('../helpers/api');

// Action type constants
var INSERT = 'blog-frontend/posts/INSERT';
var CHANGE = 'blog-frontend/posts/CHANGE';
var REMOVE = 'blog-frontend/posts/REMOVE';

// The initial state of blog post data
var initialState = {
  visiblePosts: [{ id: 5,
    title: "From Redux Store: Companies that make computers",
    content: "Dell Apple Toshiba Acer",
    createdAt: "2016-09-11T23:26:36.000Z",
    updatedAt: "2016-09-11T23:26:36.000Z"
  }, { id: 4,
    title: "From Redux Store: Dell",
    content: "A company that makes computers ",
    createdAt: "2016-09-11T23:18:08.000Z",
    updatedAt: "2016-09-11T23:18:08.000Z"
  }, { id: 3,
    title: "From Redux Store: Lego Nexo Knights",
    content: "The best lego toy set in the world.",
    createdAt: "2016-09-11T07:47:30.000Z",
    updatedAt: "2016-09-11T07:47:30.000Z"
  }, { id: 2,
    title: "From Redux Store: React",
    content: "An awesome JavaScript library from …",
    createdAt: "2016-09-11T07:46:55.000Z",
    updatedAt: "2016-09-11T07:46:55.000Z"
  }, { id: 1,
    title: "From Redux Store: Deep Learning",
    content: "The use of neural networks to learn…",
    createdAt: "2016-09-11T07:46:28.000Z",
    updatedAt: "2016-09-11T07:46:28.000Z"
  }]
};

// Function which takes the current data state and an action,
// and returns a new state
function reducer(state, action) {
  state = state || initialState;
  action = action || {};

  switch (action.type) {
    // Inserts new posts into the local store
    case INSERT:
      {

        // Add in the new posts
        // Notice that we do not need to increment the post id. Since the post that we
        // are putting in is one that is returned by the api server which already has
        // the id incremented.
        var unsortedPosts = _.concat(state.visiblePosts, action.posts);

        var visiblePosts = _.orderBy(unsortedPosts, 'createdAt', 'desc');

        // Return updated state
        return _.assign({}, state, { visiblePosts: visiblePosts });
      }
    // Changes a single post's data in the local store
    case CHANGE:
      {
        var _visiblePosts = _.clone(state.visiblePosts);
        var changedIndex = _.findIndex(state.visiblePosts, { id: action.post.id });
        _visiblePosts[changedIndex] = action.post;
        return _.assign({}, state, { visiblePosts: _visiblePosts });
      }

    // Removes a single post from the visible post list
    case REMOVE:
      {
        var _visiblePosts2 = _.reject(state.visiblePosts, { id: action.id });
        return _.assign({}, state, { visiblePosts: _visiblePosts2 });
      }

    default:
      return state;
  }
}

// Now we define a whole bunch of action creators

// Inserts posts into the post list
reducer.insertPosts = function (posts) {
  return { type: INSERT, posts: posts };
};

// Removes a post from the visible post list
reducer.removePost = function (id) {
  return { type: REMOVE, id: id };
};

// Attempts to delete a post from the server and removes it from the visible
// post list if successful
reducer.deletePost = function (postId) {
  // TODO Section 8: Add code to perform delete
  return function (dispatch) {
    api.delete('/posts/' + postId).then(function () {
      dispatch(reducer.removePost(postID));
    }).catch(function () {
      alert('Failed to delete post.');
    });
  };
};

// Attempts to update a post on the server and updates local post data if
// successful
reducer.savePost = function (editedPost, callback) {
  return function (dispatch) {
    api.put('/posts/' + editedPost.id, editedPost).then(function (post) {
      // Saves local post.
      dispatch(reducer.changePost(post));
      callback();
    }).catch(function () {
      alert('Failed to save post.  Are all of the fields filled in correctly?');
    });
  };
};

// Attempts to create a post on the server and inserts it into the local post
// list if successful
reducer.createPost = function (newPost, callback) {
  return function (dispatch) {
    api.post('/posts', newPost).then(function (post) {
      // This post is one that the store returns us! It has post id incremented to the next available id
      dispatch(reducer.insertPosts([post]));
      callback();
    }).catch(function () {
      alert('Failed to create post. Are all of the fields filled in correctly?');
    });
  };
};

// Changes local post data
reducer.changePost = function (post) {
  return { type: CHANGE, post: post };
};

// Attempts to load more posts from the server and inserts them into the local
// post list if successful
reducer.loadMorePosts = function (callback) {
  return function (dispatch, getState) {
    var state = _.assign({}, initialState, getState().posts);

    var path = '/posts';
    if (state.visiblePosts.length > 0) {
      var oldestPost = _.last(state.visiblePosts);
      path = '/posts?olderThan=' + oldestPost.createdAt;
    }
    api.get(path).then(function (newPosts) {
      dispatch(reducer.insertPosts(newPosts));
      callback();
    }).catch(function () {
      alert('Failed to load more posts');
      callback('Failed to load more posts');
    });
  };
};

// Export the action creators and reducer
module.exports = reducer;

},{"../helpers/api":11,"lodash":"lodash"}],16:[function(require,module,exports){
'use strict';

var _ = require('lodash');

var UPDATE = 'blog-frontend/time/UPDATE';

function reducer(state, action) {
  state = state || {};
  action = action || { type: null };

  switch (action.type) {
    case UPDATE:
      {
        return _.assign({}, state, { now: action.timeNow });
      }break;
    default:
      return state;
  }
}

reducer.setCurrentTime = function (timeNow) {
  return { type: UPDATE, timeNow: timeNow };
};

module.exports = reducer;

},{"lodash":"lodash"}]},{},[1])

//# sourceMappingURL=/assets/js/app.js.map
