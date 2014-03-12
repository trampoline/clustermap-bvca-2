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
var G__38943__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__38942 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38942,0,null);var body = cljs.core.nthnext(vec__38942,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38943 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38943__delegate.call(this,args);};
G__38943.cljs$lang$maxFixedArity = 0;
G__38943.cljs$lang$applyTo = (function (arglist__38944){
var args = cljs.core.seq(arglist__38944);
return G__38943__delegate(args);
});
G__38943.cljs$core$IFn$_invoke$arity$variadic = G__38943__delegate;
return G__38943;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__38949(s__38950){return (new cljs.core.LazySeq(null,(function (){var s__38950__$1 = s__38950;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38950__$1);if(temp__4092__auto__)
{var s__38950__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38950__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38950__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38952 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38951 = 0;while(true){
if((i__38951 < size__4157__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38951);cljs.core.chunk_append(b__38952,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__38953 = (i__38951 + 1);
i__38951 = G__38953;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38952),iter__38949(cljs.core.chunk_rest(s__38950__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38952),null);
}
} else
{var args = cljs.core.first(s__38950__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__38949(cljs.core.rest(s__38950__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__38954_SHARP_){return cljs.core.reset_BANG_(html,p1__38954_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__38959(s__38960){return (new cljs.core.LazySeq(null,(function (){var s__38960__$1 = s__38960;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38960__$1);if(temp__4092__auto__)
{var s__38960__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38960__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38960__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38962 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38961 = 0;while(true){
if((i__38961 < size__4157__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38961);cljs.core.chunk_append(b__38962,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$583,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$584,"text/css",cljs.core.constant$keyword$585,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$586,"stylesheet"], null)], null));
{
var G__38963 = (i__38961 + 1);
i__38961 = G__38963;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38962),iter__38959(cljs.core.chunk_rest(s__38960__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38962),null);
}
} else
{var style = cljs.core.first(s__38960__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$583,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$584,"text/css",cljs.core.constant$keyword$585,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$586,"stylesheet"], null)], null),iter__38959(cljs.core.rest(s__38960__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__38964){
var styles = cljs.core.seq(arglist__38964);
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
sablono.core.link_to38965 = (function() { 
var link_to38965__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$585,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to38965 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to38965__delegate.call(this,url,content);};
link_to38965.cljs$lang$maxFixedArity = 1;
link_to38965.cljs$lang$applyTo = (function (arglist__38966){
var url = cljs.core.first(arglist__38966);
var content = cljs.core.rest(arglist__38966);
return link_to38965__delegate(url,content);
});
link_to38965.cljs$core$IFn$_invoke$arity$variadic = link_to38965__delegate;
return link_to38965;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38965);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to38967 = (function() { 
var mail_to38967__delegate = function (e_mail,p__38968){var vec__38970 = p__38968;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38970,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$585,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to38967 = function (e_mail,var_args){
var p__38968 = null;if (arguments.length > 1) {
  p__38968 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to38967__delegate.call(this,e_mail,p__38968);};
mail_to38967.cljs$lang$maxFixedArity = 1;
mail_to38967.cljs$lang$applyTo = (function (arglist__38971){
var e_mail = cljs.core.first(arglist__38971);
var p__38968 = cljs.core.rest(arglist__38971);
return mail_to38967__delegate(e_mail,p__38968);
});
mail_to38967.cljs$core$IFn$_invoke$arity$variadic = mail_to38967__delegate;
return mail_to38967;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38967);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list38972 = (function unordered_list38972(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$588,(function (){var iter__4158__auto__ = (function iter__38977(s__38978){return (new cljs.core.LazySeq(null,(function (){var s__38978__$1 = s__38978;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38978__$1);if(temp__4092__auto__)
{var s__38978__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38978__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38978__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38980 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38979 = 0;while(true){
if((i__38979 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38979);cljs.core.chunk_append(b__38980,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,x], null));
{
var G__38981 = (i__38979 + 1);
i__38979 = G__38981;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38980),iter__38977(cljs.core.chunk_rest(s__38978__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38980),null);
}
} else
{var x = cljs.core.first(s__38978__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,x], null),iter__38977(cljs.core.rest(s__38978__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38972);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list38982 = (function ordered_list38982(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$590,(function (){var iter__4158__auto__ = (function iter__38987(s__38988){return (new cljs.core.LazySeq(null,(function (){var s__38988__$1 = s__38988;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38988__$1);if(temp__4092__auto__)
{var s__38988__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38988__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38988__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38990 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38989 = 0;while(true){
if((i__38989 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38989);cljs.core.chunk_append(b__38990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,x], null));
{
var G__38991 = (i__38989 + 1);
i__38989 = G__38991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38990),iter__38987(cljs.core.chunk_rest(s__38988__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38990),null);
}
} else
{var x = cljs.core.first(s__38988__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,x], null),iter__38987(cljs.core.rest(s__38988__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38982);
/**
* Create an image element.
*/
sablono.core.image38992 = (function() {
var image38992 = null;
var image38992__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$592,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image38992__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$593,alt], null)], null);
});
image38992 = function(src,alt){
switch(arguments.length){
case 1:
return image38992__1.call(this,src);
case 2:
return image38992__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image38992.cljs$core$IFn$_invoke$arity$1 = image38992__1;
image38992.cljs$core$IFn$_invoke$arity$2 = image38992__2;
return image38992;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image38992);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38993_SHARP_,p2__38994_SHARP_){return [cljs.core.str(p1__38993_SHARP_),cljs.core.str("["),cljs.core.str(p2__38994_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__38995_SHARP_,p2__38996_SHARP_){return [cljs.core.str(p1__38995_SHARP_),cljs.core.str("-"),cljs.core.str(p2__38996_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$584,type,cljs.core.constant$keyword$594,sablono.core.make_name(name),cljs.core.constant$keyword$580,sablono.core.make_id(name),cljs.core.constant$keyword$545,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field38997 = (function() {
var hidden_field38997 = null;
var hidden_field38997__1 = (function (name){return hidden_field38997.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field38997__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field38997 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field38997__1.call(this,name);
case 2:
return hidden_field38997__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field38997.cljs$core$IFn$_invoke$arity$1 = hidden_field38997__1;
hidden_field38997.cljs$core$IFn$_invoke$arity$2 = hidden_field38997__2;
return hidden_field38997;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field38997);
/**
* Creates a new text input field.
*/
sablono.core.text_field38998 = (function() {
var text_field38998 = null;
var text_field38998__1 = (function (name){return text_field38998.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field38998__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field38998 = function(name,value){
switch(arguments.length){
case 1:
return text_field38998__1.call(this,name);
case 2:
return text_field38998__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field38998.cljs$core$IFn$_invoke$arity$1 = text_field38998__1;
text_field38998.cljs$core$IFn$_invoke$arity$2 = text_field38998__2;
return text_field38998;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field38998);
/**
* Creates a new password field.
*/
sablono.core.password_field38999 = (function() {
var password_field38999 = null;
var password_field38999__1 = (function (name){return password_field38999.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field38999__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field38999 = function(name,value){
switch(arguments.length){
case 1:
return password_field38999__1.call(this,name);
case 2:
return password_field38999__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field38999.cljs$core$IFn$_invoke$arity$1 = password_field38999__1;
password_field38999.cljs$core$IFn$_invoke$arity$2 = password_field38999__2;
return password_field38999;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field38999);
/**
* Creates a new email input field.
*/
sablono.core.email_field39000 = (function() {
var email_field39000 = null;
var email_field39000__1 = (function (name){return email_field39000.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field39000__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field39000 = function(name,value){
switch(arguments.length){
case 1:
return email_field39000__1.call(this,name);
case 2:
return email_field39000__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field39000.cljs$core$IFn$_invoke$arity$1 = email_field39000__1;
email_field39000.cljs$core$IFn$_invoke$arity$2 = email_field39000__2;
return email_field39000;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field39000);
/**
* Creates a check box.
*/
sablono.core.check_box39001 = (function() {
var check_box39001 = null;
var check_box39001__1 = (function (name){return check_box39001.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box39001__2 = (function (name,checked_QMARK_){return check_box39001.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box39001__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$584,"checkbox",cljs.core.constant$keyword$594,sablono.core.make_name(name),cljs.core.constant$keyword$580,sablono.core.make_id(name),cljs.core.constant$keyword$545,value,cljs.core.constant$keyword$595,checked_QMARK_], null)], null);
});
check_box39001 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box39001__1.call(this,name);
case 2:
return check_box39001__2.call(this,name,checked_QMARK_);
case 3:
return check_box39001__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box39001.cljs$core$IFn$_invoke$arity$1 = check_box39001__1;
check_box39001.cljs$core$IFn$_invoke$arity$2 = check_box39001__2;
check_box39001.cljs$core$IFn$_invoke$arity$3 = check_box39001__3;
return check_box39001;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box39001);
/**
* Creates a radio button.
*/
sablono.core.radio_button39002 = (function() {
var radio_button39002 = null;
var radio_button39002__1 = (function (group){return radio_button39002.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button39002__2 = (function (group,checked_QMARK_){return radio_button39002.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button39002__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$584,"radio",cljs.core.constant$keyword$594,sablono.core.make_name(group),cljs.core.constant$keyword$580,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$545,value,cljs.core.constant$keyword$595,checked_QMARK_], null)], null);
});
radio_button39002 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button39002__1.call(this,group);
case 2:
return radio_button39002__2.call(this,group,checked_QMARK_);
case 3:
return radio_button39002__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button39002.cljs$core$IFn$_invoke$arity$1 = radio_button39002__1;
radio_button39002.cljs$core$IFn$_invoke$arity$2 = radio_button39002__2;
radio_button39002.cljs$core$IFn$_invoke$arity$3 = radio_button39002__3;
return radio_button39002;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button39002);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options39003 = (function() {
var select_options39003 = null;
var select_options39003__1 = (function (coll){return select_options39003.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options39003__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__39012(s__39013){return (new cljs.core.LazySeq(null,(function (){var s__39013__$1 = s__39013;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39013__$1);if(temp__4092__auto__)
{var s__39013__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39013__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39013__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39015 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39014 = 0;while(true){
if((i__39014 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39014);cljs.core.chunk_append(b__39015,((cljs.core.sequential_QMARK_(x))?(function (){var vec__39018 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$596,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,text], null),select_options39003.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$598,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$545,val,cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$598,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__39020 = (i__39014 + 1);
i__39014 = G__39020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39015),iter__39012(cljs.core.chunk_rest(s__39013__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39015),null);
}
} else
{var x = cljs.core.first(s__39013__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__39019 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39019,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39019,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$596,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,text], null),select_options39003.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$598,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$545,val,cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$598,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__39012(cljs.core.rest(s__39013__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
});
select_options39003 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options39003__1.call(this,coll);
case 2:
return select_options39003__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options39003.cljs$core$IFn$_invoke$arity$1 = select_options39003__1;
select_options39003.cljs$core$IFn$_invoke$arity$2 = select_options39003__2;
return select_options39003;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options39003);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down39021 = (function() {
var drop_down39021 = null;
var drop_down39021__2 = (function (name,options){return drop_down39021.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down39021__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$594,sablono.core.make_name(name),cljs.core.constant$keyword$580,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down39021 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down39021__2.call(this,name,options);
case 3:
return drop_down39021__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down39021.cljs$core$IFn$_invoke$arity$2 = drop_down39021__2;
drop_down39021.cljs$core$IFn$_invoke$arity$3 = drop_down39021__3;
return drop_down39021;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down39021);
/**
* Creates a text area element.
*/
sablono.core.text_area39022 = (function() {
var text_area39022 = null;
var text_area39022__1 = (function (name){return text_area39022.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area39022__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$581,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$594,sablono.core.make_name(name),cljs.core.constant$keyword$580,sablono.core.make_id(name),cljs.core.constant$keyword$545,value], null)], null);
});
text_area39022 = function(name,value){
switch(arguments.length){
case 1:
return text_area39022__1.call(this,name);
case 2:
return text_area39022__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area39022.cljs$core$IFn$_invoke$arity$1 = text_area39022__1;
text_area39022.cljs$core$IFn$_invoke$arity$2 = text_area39022__2;
return text_area39022;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area39022);
/**
* Creates a file upload input.
*/
sablono.core.file_upload39023 = (function file_upload39023(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload39023);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label39024 = (function label39024(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$597,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$577,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label39024);
/**
* Creates a submit button.
*/
sablono.core.submit_button39025 = (function submit_button39025(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"submit",cljs.core.constant$keyword$545,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button39025);
/**
* Creates a form reset button.
*/
sablono.core.reset_button39026 = (function reset_button39026(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$582,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$584,"reset",cljs.core.constant$keyword$545,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button39026);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to39027 = (function() { 
var form_to39027__delegate = function (p__39028,body){var vec__39030 = p__39028;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$601,null,cljs.core.constant$keyword$602,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$603,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$604,method_str,cljs.core.constant$keyword$605,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$603,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$604,"POST",cljs.core.constant$keyword$605,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to39027 = function (p__39028,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to39027__delegate.call(this,p__39028,body);};
form_to39027.cljs$lang$maxFixedArity = 1;
form_to39027.cljs$lang$applyTo = (function (arglist__39031){
var p__39028 = cljs.core.first(arglist__39031);
var body = cljs.core.rest(arglist__39031);
return form_to39027__delegate(p__39028,body);
});
form_to39027.cljs$core$IFn$_invoke$arity$variadic = form_to39027__delegate;
return form_to39027;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to39027);
