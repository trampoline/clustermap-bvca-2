// Compiled by ClojureScript 0.0-2173
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__39027__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__39026 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39026,0,null);var body = cljs.core.nthnext(vec__39026,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__39027 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__39027__delegate.call(this,args);};
G__39027.cljs$lang$maxFixedArity = 0;
G__39027.cljs$lang$applyTo = (function (arglist__39028){
var args = cljs.core.seq(arglist__39028);
return G__39027__delegate(args);
});
G__39027.cljs$core$IFn$_invoke$arity$variadic = G__39027__delegate;
return G__39027;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__39033(s__39034){return (new cljs.core.LazySeq(null,(function (){var s__39034__$1 = s__39034;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39034__$1);if(temp__4092__auto__)
{var s__39034__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39034__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39034__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39036 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39035 = 0;while(true){
if((i__39035 < size__4157__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39035);cljs.core.chunk_append(b__39036,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__39037 = (i__39035 + 1);
i__39035 = G__39037;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39036),iter__39033(cljs.core.chunk_rest(s__39034__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39036),null);
}
} else
{var args = cljs.core.first(s__39034__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__39033(cljs.core.rest(s__39034__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__39038_SHARP_){return cljs.core.reset_BANG_(html,p1__39038_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__39043(s__39044){return (new cljs.core.LazySeq(null,(function (){var s__39044__$1 = s__39044;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39044__$1);if(temp__4092__auto__)
{var s__39044__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39044__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39044__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39046 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39045 = 0;while(true){
if((i__39045 < size__4157__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39045);cljs.core.chunk_append(b__39046,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$588,"text/css",cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$590,"stylesheet"], null)], null));
{
var G__39047 = (i__39045 + 1);
i__39045 = G__39047;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39046),iter__39043(cljs.core.chunk_rest(s__39044__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39046),null);
}
} else
{var style = cljs.core.first(s__39044__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$588,"text/css",cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$590,"stylesheet"], null)], null),iter__39043(cljs.core.rest(s__39044__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__39048){
var styles = cljs.core.seq(arglist__39048);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js("http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to39049 = (function() { 
var link_to39049__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$589,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to39049 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to39049__delegate.call(this,url,content);};
link_to39049.cljs$lang$maxFixedArity = 1;
link_to39049.cljs$lang$applyTo = (function (arglist__39050){
var url = cljs.core.first(arglist__39050);
var content = cljs.core.rest(arglist__39050);
return link_to39049__delegate(url,content);
});
link_to39049.cljs$core$IFn$_invoke$arity$variadic = link_to39049__delegate;
return link_to39049;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to39049);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to39051 = (function() { 
var mail_to39051__delegate = function (e_mail,p__39052){var vec__39054 = p__39052;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39054,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$589,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to39051 = function (e_mail,var_args){
var p__39052 = null;if (arguments.length > 1) {
  p__39052 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to39051__delegate.call(this,e_mail,p__39052);};
mail_to39051.cljs$lang$maxFixedArity = 1;
mail_to39051.cljs$lang$applyTo = (function (arglist__39055){
var e_mail = cljs.core.first(arglist__39055);
var p__39052 = cljs.core.rest(arglist__39055);
return mail_to39051__delegate(e_mail,p__39052);
});
mail_to39051.cljs$core$IFn$_invoke$arity$variadic = mail_to39051__delegate;
return mail_to39051;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to39051);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list39056 = (function unordered_list39056(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$592,(function (){var iter__4158__auto__ = (function iter__39061(s__39062){return (new cljs.core.LazySeq(null,(function (){var s__39062__$1 = s__39062;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39062__$1);if(temp__4092__auto__)
{var s__39062__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39062__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39062__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39064 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39063 = 0;while(true){
if((i__39063 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39063);cljs.core.chunk_append(b__39064,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null));
{
var G__39065 = (i__39063 + 1);
i__39063 = G__39065;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39064),iter__39061(cljs.core.chunk_rest(s__39062__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39064),null);
}
} else
{var x = cljs.core.first(s__39062__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null),iter__39061(cljs.core.rest(s__39062__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list39056);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list39066 = (function ordered_list39066(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$594,(function (){var iter__4158__auto__ = (function iter__39071(s__39072){return (new cljs.core.LazySeq(null,(function (){var s__39072__$1 = s__39072;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39072__$1);if(temp__4092__auto__)
{var s__39072__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39072__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39072__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39074 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39073 = 0;while(true){
if((i__39073 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39073);cljs.core.chunk_append(b__39074,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null));
{
var G__39075 = (i__39073 + 1);
i__39073 = G__39075;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39074),iter__39071(cljs.core.chunk_rest(s__39072__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39074),null);
}
} else
{var x = cljs.core.first(s__39072__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,x], null),iter__39071(cljs.core.rest(s__39072__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list39066);
/**
* Create an image element.
*/
sablono.core.image39076 = (function() {
var image39076 = null;
var image39076__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$595,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$596,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image39076__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$595,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$596,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$597,alt], null)], null);
});
image39076 = function(src,alt){
switch(arguments.length){
case 1:
return image39076__1.call(this,src);
case 2:
return image39076__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image39076.cljs$core$IFn$_invoke$arity$1 = image39076__1;
image39076.cljs$core$IFn$_invoke$arity$2 = image39076__2;
return image39076;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image39076);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39077_SHARP_,p2__39078_SHARP_){return [cljs.core.str(p1__39077_SHARP_),cljs.core.str("["),cljs.core.str(p2__39078_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39079_SHARP_,p2__39080_SHARP_){return [cljs.core.str(p1__39079_SHARP_),cljs.core.str("-"),cljs.core.str(p2__39080_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$588,type,cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field39081 = (function() {
var hidden_field39081 = null;
var hidden_field39081__1 = (function (name){return hidden_field39081.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field39081__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field39081 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field39081__1.call(this,name);
case 2:
return hidden_field39081__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field39081.cljs$core$IFn$_invoke$arity$1 = hidden_field39081__1;
hidden_field39081.cljs$core$IFn$_invoke$arity$2 = hidden_field39081__2;
return hidden_field39081;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field39081);
/**
* Creates a new text input field.
*/
sablono.core.text_field39082 = (function() {
var text_field39082 = null;
var text_field39082__1 = (function (name){return text_field39082.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field39082__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field39082 = function(name,value){
switch(arguments.length){
case 1:
return text_field39082__1.call(this,name);
case 2:
return text_field39082__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field39082.cljs$core$IFn$_invoke$arity$1 = text_field39082__1;
text_field39082.cljs$core$IFn$_invoke$arity$2 = text_field39082__2;
return text_field39082;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field39082);
/**
* Creates a new password field.
*/
sablono.core.password_field39083 = (function() {
var password_field39083 = null;
var password_field39083__1 = (function (name){return password_field39083.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field39083__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field39083 = function(name,value){
switch(arguments.length){
case 1:
return password_field39083__1.call(this,name);
case 2:
return password_field39083__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field39083.cljs$core$IFn$_invoke$arity$1 = password_field39083__1;
password_field39083.cljs$core$IFn$_invoke$arity$2 = password_field39083__2;
return password_field39083;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field39083);
/**
* Creates a new email input field.
*/
sablono.core.email_field39084 = (function() {
var email_field39084 = null;
var email_field39084__1 = (function (name){return email_field39084.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field39084__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field39084 = function(name,value){
switch(arguments.length){
case 1:
return email_field39084__1.call(this,name);
case 2:
return email_field39084__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field39084.cljs$core$IFn$_invoke$arity$1 = email_field39084__1;
email_field39084.cljs$core$IFn$_invoke$arity$2 = email_field39084__2;
return email_field39084;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field39084);
/**
* Creates a check box.
*/
sablono.core.check_box39085 = (function() {
var check_box39085 = null;
var check_box39085__1 = (function (name){return check_box39085.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box39085__2 = (function (name,checked_QMARK_){return check_box39085.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box39085__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$588,"checkbox",cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value,cljs.core.constant$keyword$599,checked_QMARK_], null)], null);
});
check_box39085 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box39085__1.call(this,name);
case 2:
return check_box39085__2.call(this,name,checked_QMARK_);
case 3:
return check_box39085__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box39085.cljs$core$IFn$_invoke$arity$1 = check_box39085__1;
check_box39085.cljs$core$IFn$_invoke$arity$2 = check_box39085__2;
check_box39085.cljs$core$IFn$_invoke$arity$3 = check_box39085__3;
return check_box39085;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box39085);
/**
* Creates a radio button.
*/
sablono.core.radio_button39086 = (function() {
var radio_button39086 = null;
var radio_button39086__1 = (function (group){return radio_button39086.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button39086__2 = (function (group,checked_QMARK_){return radio_button39086.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button39086__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$588,"radio",cljs.core.constant$keyword$598,sablono.core.make_name(group),cljs.core.constant$keyword$584,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$549,value,cljs.core.constant$keyword$599,checked_QMARK_], null)], null);
});
radio_button39086 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button39086__1.call(this,group);
case 2:
return radio_button39086__2.call(this,group,checked_QMARK_);
case 3:
return radio_button39086__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button39086.cljs$core$IFn$_invoke$arity$1 = radio_button39086__1;
radio_button39086.cljs$core$IFn$_invoke$arity$2 = radio_button39086__2;
radio_button39086.cljs$core$IFn$_invoke$arity$3 = radio_button39086__3;
return radio_button39086;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button39086);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options39087 = (function() {
var select_options39087 = null;
var select_options39087__1 = (function (coll){return select_options39087.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options39087__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__39096(s__39097){return (new cljs.core.LazySeq(null,(function (){var s__39097__$1 = s__39097;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39097__$1);if(temp__4092__auto__)
{var s__39097__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39097__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39097__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39099 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39098 = 0;while(true){
if((i__39098 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39098);cljs.core.chunk_append(b__39099,((cljs.core.sequential_QMARK_(x))?(function (){var vec__39102 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39102,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39102,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,text], null),select_options39087.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$549,val,cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__39104 = (i__39098 + 1);
i__39098 = G__39104;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39099),iter__39096(cljs.core.chunk_rest(s__39097__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39099),null);
}
} else
{var x = cljs.core.first(s__39097__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__39103 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39103,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39103,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,text], null),select_options39087.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$549,val,cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__39096(cljs.core.rest(s__39097__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
});
select_options39087 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options39087__1.call(this,coll);
case 2:
return select_options39087__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options39087.cljs$core$IFn$_invoke$arity$1 = select_options39087__1;
select_options39087.cljs$core$IFn$_invoke$arity$2 = select_options39087__2;
return select_options39087;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options39087);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down39105 = (function() {
var drop_down39105 = null;
var drop_down39105__2 = (function (name,options){return drop_down39105.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down39105__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$604,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down39105 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down39105__2.call(this,name,options);
case 3:
return drop_down39105__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down39105.cljs$core$IFn$_invoke$arity$2 = drop_down39105__2;
drop_down39105.cljs$core$IFn$_invoke$arity$3 = drop_down39105__3;
return drop_down39105;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down39105);
/**
* Creates a text area element.
*/
sablono.core.text_area39106 = (function() {
var text_area39106 = null;
var text_area39106__1 = (function (name){return text_area39106.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area39106__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$585,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$598,sablono.core.make_name(name),cljs.core.constant$keyword$584,sablono.core.make_id(name),cljs.core.constant$keyword$549,value], null)], null);
});
text_area39106 = function(name,value){
switch(arguments.length){
case 1:
return text_area39106__1.call(this,name);
case 2:
return text_area39106__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area39106.cljs$core$IFn$_invoke$arity$1 = text_area39106__1;
text_area39106.cljs$core$IFn$_invoke$arity$2 = text_area39106__2;
return text_area39106;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area39106);
/**
* Creates a file upload input.
*/
sablono.core.file_upload39107 = (function file_upload39107(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload39107);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label39108 = (function label39108(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$601,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$581,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label39108);
/**
* Creates a submit button.
*/
sablono.core.submit_button39109 = (function submit_button39109(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"submit",cljs.core.constant$keyword$549,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button39109);
/**
* Creates a form reset button.
*/
sablono.core.reset_button39110 = (function reset_button39110(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$588,"reset",cljs.core.constant$keyword$549,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button39110);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to39111 = (function() { 
var form_to39111__delegate = function (p__39112,body){var vec__39114 = p__39112;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$605,null,cljs.core.constant$keyword$606,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$607,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$608,method_str,cljs.core.constant$keyword$609,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$607,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$608,"POST",cljs.core.constant$keyword$609,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to39111 = function (p__39112,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to39111__delegate.call(this,p__39112,body);};
form_to39111.cljs$lang$maxFixedArity = 1;
form_to39111.cljs$lang$applyTo = (function (arglist__39115){
var p__39112 = cljs.core.first(arglist__39115);
var body = cljs.core.rest(arglist__39115);
return form_to39111__delegate(p__39112,body);
});
form_to39111.cljs$core$IFn$_invoke$arity$variadic = form_to39111__delegate;
return form_to39111;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to39111);
