// Compiled by ClojureScript 0.0-2138
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
var G__26923__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26922 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26922,0,null);var body = cljs.core.nthnext(vec__26922,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26923 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26923__delegate.call(this,args);};
G__26923.cljs$lang$maxFixedArity = 0;
G__26923.cljs$lang$applyTo = (function (arglist__26924){
var args = cljs.core.seq(arglist__26924);
return G__26923__delegate(args);
});
G__26923.cljs$core$IFn$_invoke$arity$variadic = G__26923__delegate;
return G__26923;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26929(s__26930){return (new cljs.core.LazySeq(null,(function (){var s__26930__$1 = s__26930;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26930__$1);if(temp__4092__auto__)
{var s__26930__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26930__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26930__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26932 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26931 = 0;while(true){
if((i__26931 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26931);cljs.core.chunk_append(b__26932,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26933 = (i__26931 + 1);
i__26931 = G__26933;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26932),iter__26929(cljs.core.chunk_rest(s__26930__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26932),null);
}
} else
{var args = cljs.core.first(s__26930__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26929(cljs.core.rest(s__26930__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26934_SHARP_){return cljs.core.reset_BANG_(html,p1__26934_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26939(s__26940){return (new cljs.core.LazySeq(null,(function (){var s__26940__$1 = s__26940;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26940__$1);if(temp__4092__auto__)
{var s__26940__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26940__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26940__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26942 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26941 = 0;while(true){
if((i__26941 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26941);cljs.core.chunk_append(b__26942,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$263,"text/css",cljs.core.constant$keyword$264,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$265,"stylesheet"], null)], null));
{
var G__26943 = (i__26941 + 1);
i__26941 = G__26943;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26942),iter__26939(cljs.core.chunk_rest(s__26940__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26942),null);
}
} else
{var style = cljs.core.first(s__26940__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$263,"text/css",cljs.core.constant$keyword$264,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$265,"stylesheet"], null)], null),iter__26939(cljs.core.rest(s__26940__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__26944){
var styles = cljs.core.seq(arglist__26944);
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
sablono.core.link_to26945 = (function() { 
var link_to26945__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26945 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26945__delegate.call(this,url,content);};
link_to26945.cljs$lang$maxFixedArity = 1;
link_to26945.cljs$lang$applyTo = (function (arglist__26946){
var url = cljs.core.first(arglist__26946);
var content = cljs.core.rest(arglist__26946);
return link_to26945__delegate(url,content);
});
link_to26945.cljs$core$IFn$_invoke$arity$variadic = link_to26945__delegate;
return link_to26945;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26945);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26947 = (function() { 
var mail_to26947__delegate = function (e_mail,p__26948){var vec__26950 = p__26948;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26950,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$264,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26947 = function (e_mail,var_args){
var p__26948 = null;if (arguments.length > 1) {
  p__26948 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26947__delegate.call(this,e_mail,p__26948);};
mail_to26947.cljs$lang$maxFixedArity = 1;
mail_to26947.cljs$lang$applyTo = (function (arglist__26951){
var e_mail = cljs.core.first(arglist__26951);
var p__26948 = cljs.core.rest(arglist__26951);
return mail_to26947__delegate(e_mail,p__26948);
});
mail_to26947.cljs$core$IFn$_invoke$arity$variadic = mail_to26947__delegate;
return mail_to26947;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26947);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26952 = (function unordered_list26952(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,(function (){var iter__4117__auto__ = (function iter__26957(s__26958){return (new cljs.core.LazySeq(null,(function (){var s__26958__$1 = s__26958;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26958__$1);if(temp__4092__auto__)
{var s__26958__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26958__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26958__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26960 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26959 = 0;while(true){
if((i__26959 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26959);cljs.core.chunk_append(b__26960,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,x], null));
{
var G__26961 = (i__26959 + 1);
i__26959 = G__26961;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26960),iter__26957(cljs.core.chunk_rest(s__26958__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26960),null);
}
} else
{var x = cljs.core.first(s__26958__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,x], null),iter__26957(cljs.core.rest(s__26958__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26952);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26962 = (function ordered_list26962(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,(function (){var iter__4117__auto__ = (function iter__26967(s__26968){return (new cljs.core.LazySeq(null,(function (){var s__26968__$1 = s__26968;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26968__$1);if(temp__4092__auto__)
{var s__26968__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26968__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26968__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26970 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26969 = 0;while(true){
if((i__26969 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26969);cljs.core.chunk_append(b__26970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,x], null));
{
var G__26971 = (i__26969 + 1);
i__26969 = G__26971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26970),iter__26967(cljs.core.chunk_rest(s__26968__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26970),null);
}
} else
{var x = cljs.core.first(s__26968__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,x], null),iter__26967(cljs.core.rest(s__26968__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26962);
/**
* Create an image element.
*/
sablono.core.image26972 = (function() {
var image26972 = null;
var image26972__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26972__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$272,alt], null)], null);
});
image26972 = function(src,alt){
switch(arguments.length){
case 1:
return image26972__1.call(this,src);
case 2:
return image26972__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26972.cljs$core$IFn$_invoke$arity$1 = image26972__1;
image26972.cljs$core$IFn$_invoke$arity$2 = image26972__2;
return image26972;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26972);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26973_SHARP_,p2__26974_SHARP_){return [cljs.core.str(p1__26973_SHARP_),cljs.core.str("["),cljs.core.str(p2__26974_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26975_SHARP_,p2__26976_SHARP_){return [cljs.core.str(p1__26975_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26976_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$263,type,cljs.core.constant$keyword$273,sablono.core.make_name(name),cljs.core.constant$keyword$259,sablono.core.make_id(name),cljs.core.constant$keyword$228,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26977 = (function() {
var hidden_field26977 = null;
var hidden_field26977__1 = (function (name){return hidden_field26977.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26977__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26977 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26977__1.call(this,name);
case 2:
return hidden_field26977__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26977.cljs$core$IFn$_invoke$arity$1 = hidden_field26977__1;
hidden_field26977.cljs$core$IFn$_invoke$arity$2 = hidden_field26977__2;
return hidden_field26977;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26977);
/**
* Creates a new text input field.
*/
sablono.core.text_field26978 = (function() {
var text_field26978 = null;
var text_field26978__1 = (function (name){return text_field26978.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26978__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26978 = function(name,value){
switch(arguments.length){
case 1:
return text_field26978__1.call(this,name);
case 2:
return text_field26978__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26978.cljs$core$IFn$_invoke$arity$1 = text_field26978__1;
text_field26978.cljs$core$IFn$_invoke$arity$2 = text_field26978__2;
return text_field26978;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26978);
/**
* Creates a new password field.
*/
sablono.core.password_field26979 = (function() {
var password_field26979 = null;
var password_field26979__1 = (function (name){return password_field26979.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26979__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26979 = function(name,value){
switch(arguments.length){
case 1:
return password_field26979__1.call(this,name);
case 2:
return password_field26979__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26979.cljs$core$IFn$_invoke$arity$1 = password_field26979__1;
password_field26979.cljs$core$IFn$_invoke$arity$2 = password_field26979__2;
return password_field26979;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26979);
/**
* Creates a new email input field.
*/
sablono.core.email_field26980 = (function() {
var email_field26980 = null;
var email_field26980__1 = (function (name){return email_field26980.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26980__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26980 = function(name,value){
switch(arguments.length){
case 1:
return email_field26980__1.call(this,name);
case 2:
return email_field26980__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26980.cljs$core$IFn$_invoke$arity$1 = email_field26980__1;
email_field26980.cljs$core$IFn$_invoke$arity$2 = email_field26980__2;
return email_field26980;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26980);
/**
* Creates a check box.
*/
sablono.core.check_box26981 = (function() {
var check_box26981 = null;
var check_box26981__1 = (function (name){return check_box26981.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26981__2 = (function (name,checked_QMARK_){return check_box26981.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26981__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$263,"checkbox",cljs.core.constant$keyword$273,sablono.core.make_name(name),cljs.core.constant$keyword$259,sablono.core.make_id(name),cljs.core.constant$keyword$228,value,cljs.core.constant$keyword$274,checked_QMARK_], null)], null);
});
check_box26981 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26981__1.call(this,name);
case 2:
return check_box26981__2.call(this,name,checked_QMARK_);
case 3:
return check_box26981__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26981.cljs$core$IFn$_invoke$arity$1 = check_box26981__1;
check_box26981.cljs$core$IFn$_invoke$arity$2 = check_box26981__2;
check_box26981.cljs$core$IFn$_invoke$arity$3 = check_box26981__3;
return check_box26981;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26981);
/**
* Creates a radio button.
*/
sablono.core.radio_button26982 = (function() {
var radio_button26982 = null;
var radio_button26982__1 = (function (group){return radio_button26982.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26982__2 = (function (group,checked_QMARK_){return radio_button26982.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26982__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$263,"radio",cljs.core.constant$keyword$273,sablono.core.make_name(group),cljs.core.constant$keyword$259,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$228,value,cljs.core.constant$keyword$274,checked_QMARK_], null)], null);
});
radio_button26982 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26982__1.call(this,group);
case 2:
return radio_button26982__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26982__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26982.cljs$core$IFn$_invoke$arity$1 = radio_button26982__1;
radio_button26982.cljs$core$IFn$_invoke$arity$2 = radio_button26982__2;
radio_button26982.cljs$core$IFn$_invoke$arity$3 = radio_button26982__3;
return radio_button26982;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26982);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26983 = (function() {
var select_options26983 = null;
var select_options26983__1 = (function (coll){return select_options26983.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26983__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26992(s__26993){return (new cljs.core.LazySeq(null,(function (){var s__26993__$1 = s__26993;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26993__$1);if(temp__4092__auto__)
{var s__26993__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26993__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26993__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26995 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26994 = 0;while(true){
if((i__26994 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26994);cljs.core.chunk_append(b__26995,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26998 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26998,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26998,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,text], null),select_options26983.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,val,cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27000 = (i__26994 + 1);
i__26994 = G__27000;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26995),iter__26992(cljs.core.chunk_rest(s__26993__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26995),null);
}
} else
{var x = cljs.core.first(s__26993__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26999 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26999,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26999,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,text], null),select_options26983.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,val,cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26992(cljs.core.rest(s__26993__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26983 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26983__1.call(this,coll);
case 2:
return select_options26983__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26983.cljs$core$IFn$_invoke$arity$1 = select_options26983__1;
select_options26983.cljs$core$IFn$_invoke$arity$2 = select_options26983__2;
return select_options26983;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26983);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27001 = (function() {
var drop_down27001 = null;
var drop_down27001__2 = (function (name,options){return drop_down27001.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27001__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$273,sablono.core.make_name(name),cljs.core.constant$keyword$259,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27001 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27001__2.call(this,name,options);
case 3:
return drop_down27001__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27001.cljs$core$IFn$_invoke$arity$2 = drop_down27001__2;
drop_down27001.cljs$core$IFn$_invoke$arity$3 = drop_down27001__3;
return drop_down27001;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27001);
/**
* Creates a text area element.
*/
sablono.core.text_area27002 = (function() {
var text_area27002 = null;
var text_area27002__1 = (function (name){return text_area27002.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27002__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$273,sablono.core.make_name(name),cljs.core.constant$keyword$259,sablono.core.make_id(name),cljs.core.constant$keyword$228,value], null)], null);
});
text_area27002 = function(name,value){
switch(arguments.length){
case 1:
return text_area27002__1.call(this,name);
case 2:
return text_area27002__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27002.cljs$core$IFn$_invoke$arity$1 = text_area27002__1;
text_area27002.cljs$core$IFn$_invoke$arity$2 = text_area27002__2;
return text_area27002;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27002);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27003 = (function file_upload27003(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27003);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27004 = (function label27004(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$256,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27004);
/**
* Creates a submit button.
*/
sablono.core.submit_button27005 = (function submit_button27005(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,"submit",cljs.core.constant$keyword$228,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27005);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27006 = (function reset_button27006(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,"reset",cljs.core.constant$keyword$228,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27006);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27007 = (function() { 
var form_to27007__delegate = function (p__27008,body){var vec__27010 = p__27008;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27010,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27010,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$280,null,cljs.core.constant$keyword$281,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,method_str,cljs.core.constant$keyword$284,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,"POST",cljs.core.constant$keyword$284,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27007 = function (p__27008,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27007__delegate.call(this,p__27008,body);};
form_to27007.cljs$lang$maxFixedArity = 1;
form_to27007.cljs$lang$applyTo = (function (arglist__27011){
var p__27008 = cljs.core.first(arglist__27011);
var body = cljs.core.rest(arglist__27011);
return form_to27007__delegate(p__27008,body);
});
form_to27007.cljs$core$IFn$_invoke$arity$variadic = form_to27007__delegate;
return form_to27007;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27007);
