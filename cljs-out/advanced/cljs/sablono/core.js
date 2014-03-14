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
var G__38955__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__38954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38954,0,null);var body = cljs.core.nthnext(vec__38954,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__38955 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38955__delegate.call(this,args);};
G__38955.cljs$lang$maxFixedArity = 0;
G__38955.cljs$lang$applyTo = (function (arglist__38956){
var args = cljs.core.seq(arglist__38956);
return G__38955__delegate(args);
});
G__38955.cljs$core$IFn$_invoke$arity$variadic = G__38955__delegate;
return G__38955;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4158__auto__ = (function iter__38961(s__38962){return (new cljs.core.LazySeq(null,(function (){var s__38962__$1 = s__38962;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38962__$1);if(temp__4092__auto__)
{var s__38962__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38962__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38962__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38964 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38963 = 0;while(true){
if((i__38963 < size__4157__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38963);cljs.core.chunk_append(b__38964,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__38965 = (i__38963 + 1);
i__38963 = G__38965;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38964),iter__38961(cljs.core.chunk_rest(s__38962__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38964),null);
}
} else
{var args = cljs.core.first(s__38962__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__38961(cljs.core.rest(s__38962__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__38966_SHARP_){return cljs.core.reset_BANG_(html,p1__38966_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4158__auto__ = (function iter__38971(s__38972){return (new cljs.core.LazySeq(null,(function (){var s__38972__$1 = s__38972;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38972__$1);if(temp__4092__auto__)
{var s__38972__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38972__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38972__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38974 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38973 = 0;while(true){
if((i__38973 < size__4157__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38973);cljs.core.chunk_append(b__38974,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$581,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$582,"text/css",cljs.core.constant$keyword$583,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$584,"stylesheet"], null)], null));
{
var G__38975 = (i__38973 + 1);
i__38973 = G__38975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38974),iter__38971(cljs.core.chunk_rest(s__38972__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38974),null);
}
} else
{var style = cljs.core.first(s__38972__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$581,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$582,"text/css",cljs.core.constant$keyword$583,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$584,"stylesheet"], null)], null),iter__38971(cljs.core.rest(s__38972__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__38976){
var styles = cljs.core.seq(arglist__38976);
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
sablono.core.link_to38977 = (function() { 
var link_to38977__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$585,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$583,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to38977 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to38977__delegate.call(this,url,content);};
link_to38977.cljs$lang$maxFixedArity = 1;
link_to38977.cljs$lang$applyTo = (function (arglist__38978){
var url = cljs.core.first(arglist__38978);
var content = cljs.core.rest(arglist__38978);
return link_to38977__delegate(url,content);
});
link_to38977.cljs$core$IFn$_invoke$arity$variadic = link_to38977__delegate;
return link_to38977;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to38977);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to38979 = (function() { 
var mail_to38979__delegate = function (e_mail,p__38980){var vec__38982 = p__38980;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38982,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$585,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$583,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3441__auto__ = content;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to38979 = function (e_mail,var_args){
var p__38980 = null;if (arguments.length > 1) {
  p__38980 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to38979__delegate.call(this,e_mail,p__38980);};
mail_to38979.cljs$lang$maxFixedArity = 1;
mail_to38979.cljs$lang$applyTo = (function (arglist__38983){
var e_mail = cljs.core.first(arglist__38983);
var p__38980 = cljs.core.rest(arglist__38983);
return mail_to38979__delegate(e_mail,p__38980);
});
mail_to38979.cljs$core$IFn$_invoke$arity$variadic = mail_to38979__delegate;
return mail_to38979;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to38979);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list38984 = (function unordered_list38984(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,(function (){var iter__4158__auto__ = (function iter__38989(s__38990){return (new cljs.core.LazySeq(null,(function (){var s__38990__$1 = s__38990;while(true){
var temp__4092__auto__ = cljs.core.seq(s__38990__$1);if(temp__4092__auto__)
{var s__38990__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__38990__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__38990__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__38992 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__38991 = 0;while(true){
if((i__38991 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__38991);cljs.core.chunk_append(b__38992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,x], null));
{
var G__38993 = (i__38991 + 1);
i__38991 = G__38993;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38992),iter__38989(cljs.core.chunk_rest(s__38990__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38992),null);
}
} else
{var x = cljs.core.first(s__38990__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,x], null),iter__38989(cljs.core.rest(s__38990__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list38984);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list38994 = (function ordered_list38994(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$588,(function (){var iter__4158__auto__ = (function iter__38999(s__39000){return (new cljs.core.LazySeq(null,(function (){var s__39000__$1 = s__39000;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39000__$1);if(temp__4092__auto__)
{var s__39000__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39000__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39000__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39002 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39001 = 0;while(true){
if((i__39001 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39001);cljs.core.chunk_append(b__39002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,x], null));
{
var G__39003 = (i__39001 + 1);
i__39001 = G__39003;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39002),iter__38999(cljs.core.chunk_rest(s__39000__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39002),null);
}
} else
{var x = cljs.core.first(s__39000__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,x], null),iter__38999(cljs.core.rest(s__39000__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list38994);
/**
* Create an image element.
*/
sablono.core.image39004 = (function() {
var image39004 = null;
var image39004__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$590,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image39004__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$590,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$591,alt], null)], null);
});
image39004 = function(src,alt){
switch(arguments.length){
case 1:
return image39004__1.call(this,src);
case 2:
return image39004__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image39004.cljs$core$IFn$_invoke$arity$1 = image39004__1;
image39004.cljs$core$IFn$_invoke$arity$2 = image39004__2;
return image39004;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image39004);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39005_SHARP_,p2__39006_SHARP_){return [cljs.core.str(p1__39005_SHARP_),cljs.core.str("["),cljs.core.str(p2__39006_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__39007_SHARP_,p2__39008_SHARP_){return [cljs.core.str(p1__39007_SHARP_),cljs.core.str("-"),cljs.core.str(p2__39008_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$580,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$582,type,cljs.core.constant$keyword$592,sablono.core.make_name(name),cljs.core.constant$keyword$578,sablono.core.make_id(name),cljs.core.constant$keyword$543,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field39009 = (function() {
var hidden_field39009 = null;
var hidden_field39009__1 = (function (name){return hidden_field39009.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field39009__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field39009 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field39009__1.call(this,name);
case 2:
return hidden_field39009__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field39009.cljs$core$IFn$_invoke$arity$1 = hidden_field39009__1;
hidden_field39009.cljs$core$IFn$_invoke$arity$2 = hidden_field39009__2;
return hidden_field39009;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field39009);
/**
* Creates a new text input field.
*/
sablono.core.text_field39010 = (function() {
var text_field39010 = null;
var text_field39010__1 = (function (name){return text_field39010.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field39010__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field39010 = function(name,value){
switch(arguments.length){
case 1:
return text_field39010__1.call(this,name);
case 2:
return text_field39010__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field39010.cljs$core$IFn$_invoke$arity$1 = text_field39010__1;
text_field39010.cljs$core$IFn$_invoke$arity$2 = text_field39010__2;
return text_field39010;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field39010);
/**
* Creates a new password field.
*/
sablono.core.password_field39011 = (function() {
var password_field39011 = null;
var password_field39011__1 = (function (name){return password_field39011.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field39011__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field39011 = function(name,value){
switch(arguments.length){
case 1:
return password_field39011__1.call(this,name);
case 2:
return password_field39011__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field39011.cljs$core$IFn$_invoke$arity$1 = password_field39011__1;
password_field39011.cljs$core$IFn$_invoke$arity$2 = password_field39011__2;
return password_field39011;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field39011);
/**
* Creates a new email input field.
*/
sablono.core.email_field39012 = (function() {
var email_field39012 = null;
var email_field39012__1 = (function (name){return email_field39012.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field39012__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field39012 = function(name,value){
switch(arguments.length){
case 1:
return email_field39012__1.call(this,name);
case 2:
return email_field39012__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field39012.cljs$core$IFn$_invoke$arity$1 = email_field39012__1;
email_field39012.cljs$core$IFn$_invoke$arity$2 = email_field39012__2;
return email_field39012;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field39012);
/**
* Creates a check box.
*/
sablono.core.check_box39013 = (function() {
var check_box39013 = null;
var check_box39013__1 = (function (name){return check_box39013.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box39013__2 = (function (name,checked_QMARK_){return check_box39013.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box39013__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$580,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$582,"checkbox",cljs.core.constant$keyword$592,sablono.core.make_name(name),cljs.core.constant$keyword$578,sablono.core.make_id(name),cljs.core.constant$keyword$543,value,cljs.core.constant$keyword$593,checked_QMARK_], null)], null);
});
check_box39013 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box39013__1.call(this,name);
case 2:
return check_box39013__2.call(this,name,checked_QMARK_);
case 3:
return check_box39013__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box39013.cljs$core$IFn$_invoke$arity$1 = check_box39013__1;
check_box39013.cljs$core$IFn$_invoke$arity$2 = check_box39013__2;
check_box39013.cljs$core$IFn$_invoke$arity$3 = check_box39013__3;
return check_box39013;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box39013);
/**
* Creates a radio button.
*/
sablono.core.radio_button39014 = (function() {
var radio_button39014 = null;
var radio_button39014__1 = (function (group){return radio_button39014.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button39014__2 = (function (group,checked_QMARK_){return radio_button39014.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button39014__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$580,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$582,"radio",cljs.core.constant$keyword$592,sablono.core.make_name(group),cljs.core.constant$keyword$578,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$543,value,cljs.core.constant$keyword$593,checked_QMARK_], null)], null);
});
radio_button39014 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button39014__1.call(this,group);
case 2:
return radio_button39014__2.call(this,group,checked_QMARK_);
case 3:
return radio_button39014__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button39014.cljs$core$IFn$_invoke$arity$1 = radio_button39014__1;
radio_button39014.cljs$core$IFn$_invoke$arity$2 = radio_button39014__2;
radio_button39014.cljs$core$IFn$_invoke$arity$3 = radio_button39014__3;
return radio_button39014;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button39014);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options39015 = (function() {
var select_options39015 = null;
var select_options39015__1 = (function (coll){return select_options39015.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options39015__2 = (function (coll,selected){var iter__4158__auto__ = (function iter__39024(s__39025){return (new cljs.core.LazySeq(null,(function (){var s__39025__$1 = s__39025;while(true){
var temp__4092__auto__ = cljs.core.seq(s__39025__$1);if(temp__4092__auto__)
{var s__39025__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__39025__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__39025__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__39027 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__39026 = 0;while(true){
if((i__39026 < size__4157__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__39026);cljs.core.chunk_append(b__39027,((cljs.core.sequential_QMARK_(x))?(function (){var vec__39030 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39030,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$594,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$595,text], null),select_options39015.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$596,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$543,val,cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$596,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__39032 = (i__39026 + 1);
i__39026 = G__39032;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39027),iter__39024(cljs.core.chunk_rest(s__39025__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39027),null);
}
} else
{var x = cljs.core.first(s__39025__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__39031 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39031,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39031,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$594,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$595,text], null),select_options39015.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$596,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$543,val,cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$596,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__39024(cljs.core.rest(s__39025__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(coll);
});
select_options39015 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options39015__1.call(this,coll);
case 2:
return select_options39015__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options39015.cljs$core$IFn$_invoke$arity$1 = select_options39015__1;
select_options39015.cljs$core$IFn$_invoke$arity$2 = select_options39015__2;
return select_options39015;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options39015);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down39033 = (function() {
var drop_down39033 = null;
var drop_down39033__2 = (function (name,options){return drop_down39033.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down39033__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$598,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$592,sablono.core.make_name(name),cljs.core.constant$keyword$578,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down39033 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down39033__2.call(this,name,options);
case 3:
return drop_down39033__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down39033.cljs$core$IFn$_invoke$arity$2 = drop_down39033__2;
drop_down39033.cljs$core$IFn$_invoke$arity$3 = drop_down39033__3;
return drop_down39033;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down39033);
/**
* Creates a text area element.
*/
sablono.core.text_area39034 = (function() {
var text_area39034 = null;
var text_area39034__1 = (function (name){return text_area39034.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area39034__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$579,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$592,sablono.core.make_name(name),cljs.core.constant$keyword$578,sablono.core.make_id(name),cljs.core.constant$keyword$543,value], null)], null);
});
text_area39034 = function(name,value){
switch(arguments.length){
case 1:
return text_area39034__1.call(this,name);
case 2:
return text_area39034__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area39034.cljs$core$IFn$_invoke$arity$1 = text_area39034__1;
text_area39034.cljs$core$IFn$_invoke$arity$2 = text_area39034__2;
return text_area39034;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area39034);
/**
* Creates a file upload input.
*/
sablono.core.file_upload39035 = (function file_upload39035(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload39035);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label39036 = (function label39036(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$595,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$575,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label39036);
/**
* Creates a submit button.
*/
sablono.core.submit_button39037 = (function submit_button39037(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$580,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,"submit",cljs.core.constant$keyword$543,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button39037);
/**
* Creates a form reset button.
*/
sablono.core.reset_button39038 = (function reset_button39038(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$580,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$582,"reset",cljs.core.constant$keyword$543,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button39038);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to39039 = (function() { 
var form_to39039__delegate = function (p__39040,body){var vec__39042 = p__39040;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39042,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39042,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$599,null,cljs.core.constant$keyword$600,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$601,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$602,method_str,cljs.core.constant$keyword$603,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$601,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$602,"POST",cljs.core.constant$keyword$603,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to39039 = function (p__39040,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to39039__delegate.call(this,p__39040,body);};
form_to39039.cljs$lang$maxFixedArity = 1;
form_to39039.cljs$lang$applyTo = (function (arglist__39043){
var p__39040 = cljs.core.first(arglist__39043);
var body = cljs.core.rest(arglist__39043);
return form_to39039__delegate(p__39040,body);
});
form_to39039.cljs$core$IFn$_invoke$arity$variadic = form_to39039__delegate;
return form_to39039;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to39039);
