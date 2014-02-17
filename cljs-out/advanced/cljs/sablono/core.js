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
var G__26971__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26970 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26970,0,null);var body = cljs.core.nthnext(vec__26970,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26971 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26971__delegate.call(this,args);};
G__26971.cljs$lang$maxFixedArity = 0;
G__26971.cljs$lang$applyTo = (function (arglist__26972){
var args = cljs.core.seq(arglist__26972);
return G__26971__delegate(args);
});
G__26971.cljs$core$IFn$_invoke$arity$variadic = G__26971__delegate;
return G__26971;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26977(s__26978){return (new cljs.core.LazySeq(null,(function (){var s__26978__$1 = s__26978;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26978__$1);if(temp__4092__auto__)
{var s__26978__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26978__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26978__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26980 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26979 = 0;while(true){
if((i__26979 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26979);cljs.core.chunk_append(b__26980,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26981 = (i__26979 + 1);
i__26979 = G__26981;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26980),iter__26977(cljs.core.chunk_rest(s__26978__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26980),null);
}
} else
{var args = cljs.core.first(s__26978__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26977(cljs.core.rest(s__26978__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26982_SHARP_){return cljs.core.reset_BANG_(html,p1__26982_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26987(s__26988){return (new cljs.core.LazySeq(null,(function (){var s__26988__$1 = s__26988;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26988__$1);if(temp__4092__auto__)
{var s__26988__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26988__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26988__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26990 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26989 = 0;while(true){
if((i__26989 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26989);cljs.core.chunk_append(b__26990,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$264,"text/css",cljs.core.constant$keyword$265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$266,"stylesheet"], null)], null));
{
var G__26991 = (i__26989 + 1);
i__26989 = G__26991;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26990),iter__26987(cljs.core.chunk_rest(s__26988__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26990),null);
}
} else
{var style = cljs.core.first(s__26988__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$264,"text/css",cljs.core.constant$keyword$265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$266,"stylesheet"], null)], null),iter__26987(cljs.core.rest(s__26988__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26992){
var styles = cljs.core.seq(arglist__26992);
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
sablono.core.link_to26993 = (function() { 
var link_to26993__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$265,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26993 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26993__delegate.call(this,url,content);};
link_to26993.cljs$lang$maxFixedArity = 1;
link_to26993.cljs$lang$applyTo = (function (arglist__26994){
var url = cljs.core.first(arglist__26994);
var content = cljs.core.rest(arglist__26994);
return link_to26993__delegate(url,content);
});
link_to26993.cljs$core$IFn$_invoke$arity$variadic = link_to26993__delegate;
return link_to26993;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26993);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26995 = (function() { 
var mail_to26995__delegate = function (e_mail,p__26996){var vec__26998 = p__26996;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26998,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$265,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26995 = function (e_mail,var_args){
var p__26996 = null;if (arguments.length > 1) {
  p__26996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26995__delegate.call(this,e_mail,p__26996);};
mail_to26995.cljs$lang$maxFixedArity = 1;
mail_to26995.cljs$lang$applyTo = (function (arglist__26999){
var e_mail = cljs.core.first(arglist__26999);
var p__26996 = cljs.core.rest(arglist__26999);
return mail_to26995__delegate(e_mail,p__26996);
});
mail_to26995.cljs$core$IFn$_invoke$arity$variadic = mail_to26995__delegate;
return mail_to26995;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26995);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27000 = (function unordered_list27000(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,(function (){var iter__4117__auto__ = (function iter__27005(s__27006){return (new cljs.core.LazySeq(null,(function (){var s__27006__$1 = s__27006;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27006__$1);if(temp__4092__auto__)
{var s__27006__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27006__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27006__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27008 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27007 = 0;while(true){
if((i__27007 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27007);cljs.core.chunk_append(b__27008,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,x], null));
{
var G__27009 = (i__27007 + 1);
i__27007 = G__27009;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27008),iter__27005(cljs.core.chunk_rest(s__27006__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27008),null);
}
} else
{var x = cljs.core.first(s__27006__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,x], null),iter__27005(cljs.core.rest(s__27006__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list27000);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27010 = (function ordered_list27010(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,(function (){var iter__4117__auto__ = (function iter__27015(s__27016){return (new cljs.core.LazySeq(null,(function (){var s__27016__$1 = s__27016;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27016__$1);if(temp__4092__auto__)
{var s__27016__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27016__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27016__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27018 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27017 = 0;while(true){
if((i__27017 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27017);cljs.core.chunk_append(b__27018,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,x], null));
{
var G__27019 = (i__27017 + 1);
i__27017 = G__27019;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27018),iter__27015(cljs.core.chunk_rest(s__27016__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27018),null);
}
} else
{var x = cljs.core.first(s__27016__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,x], null),iter__27015(cljs.core.rest(s__27016__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list27010);
/**
* Create an image element.
*/
sablono.core.image27020 = (function() {
var image27020 = null;
var image27020__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image27020__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$273,alt], null)], null);
});
image27020 = function(src,alt){
switch(arguments.length){
case 1:
return image27020__1.call(this,src);
case 2:
return image27020__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27020.cljs$core$IFn$_invoke$arity$1 = image27020__1;
image27020.cljs$core$IFn$_invoke$arity$2 = image27020__2;
return image27020;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image27020);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27021_SHARP_,p2__27022_SHARP_){return [cljs.core.str(p1__27021_SHARP_),cljs.core.str("["),cljs.core.str(p2__27022_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__27023_SHARP_,p2__27024_SHARP_){return [cljs.core.str(p1__27023_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27024_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$264,type,cljs.core.constant$keyword$274,sablono.core.make_name(name),cljs.core.constant$keyword$260,sablono.core.make_id(name),cljs.core.constant$keyword$229,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27025 = (function() {
var hidden_field27025 = null;
var hidden_field27025__1 = (function (name){return hidden_field27025.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field27025__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field27025 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field27025__1.call(this,name);
case 2:
return hidden_field27025__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27025.cljs$core$IFn$_invoke$arity$1 = hidden_field27025__1;
hidden_field27025.cljs$core$IFn$_invoke$arity$2 = hidden_field27025__2;
return hidden_field27025;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field27025);
/**
* Creates a new text input field.
*/
sablono.core.text_field27026 = (function() {
var text_field27026 = null;
var text_field27026__1 = (function (name){return text_field27026.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field27026__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field27026 = function(name,value){
switch(arguments.length){
case 1:
return text_field27026__1.call(this,name);
case 2:
return text_field27026__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27026.cljs$core$IFn$_invoke$arity$1 = text_field27026__1;
text_field27026.cljs$core$IFn$_invoke$arity$2 = text_field27026__2;
return text_field27026;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field27026);
/**
* Creates a new password field.
*/
sablono.core.password_field27027 = (function() {
var password_field27027 = null;
var password_field27027__1 = (function (name){return password_field27027.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field27027__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field27027 = function(name,value){
switch(arguments.length){
case 1:
return password_field27027__1.call(this,name);
case 2:
return password_field27027__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27027.cljs$core$IFn$_invoke$arity$1 = password_field27027__1;
password_field27027.cljs$core$IFn$_invoke$arity$2 = password_field27027__2;
return password_field27027;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field27027);
/**
* Creates a new email input field.
*/
sablono.core.email_field27028 = (function() {
var email_field27028 = null;
var email_field27028__1 = (function (name){return email_field27028.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field27028__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field27028 = function(name,value){
switch(arguments.length){
case 1:
return email_field27028__1.call(this,name);
case 2:
return email_field27028__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27028.cljs$core$IFn$_invoke$arity$1 = email_field27028__1;
email_field27028.cljs$core$IFn$_invoke$arity$2 = email_field27028__2;
return email_field27028;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field27028);
/**
* Creates a check box.
*/
sablono.core.check_box27029 = (function() {
var check_box27029 = null;
var check_box27029__1 = (function (name){return check_box27029.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box27029__2 = (function (name,checked_QMARK_){return check_box27029.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box27029__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$264,"checkbox",cljs.core.constant$keyword$274,sablono.core.make_name(name),cljs.core.constant$keyword$260,sablono.core.make_id(name),cljs.core.constant$keyword$229,value,cljs.core.constant$keyword$275,checked_QMARK_], null)], null);
});
check_box27029 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27029__1.call(this,name);
case 2:
return check_box27029__2.call(this,name,checked_QMARK_);
case 3:
return check_box27029__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27029.cljs$core$IFn$_invoke$arity$1 = check_box27029__1;
check_box27029.cljs$core$IFn$_invoke$arity$2 = check_box27029__2;
check_box27029.cljs$core$IFn$_invoke$arity$3 = check_box27029__3;
return check_box27029;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box27029);
/**
* Creates a radio button.
*/
sablono.core.radio_button27030 = (function() {
var radio_button27030 = null;
var radio_button27030__1 = (function (group){return radio_button27030.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button27030__2 = (function (group,checked_QMARK_){return radio_button27030.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button27030__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$264,"radio",cljs.core.constant$keyword$274,sablono.core.make_name(group),cljs.core.constant$keyword$260,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$229,value,cljs.core.constant$keyword$275,checked_QMARK_], null)], null);
});
radio_button27030 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27030__1.call(this,group);
case 2:
return radio_button27030__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27030__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27030.cljs$core$IFn$_invoke$arity$1 = radio_button27030__1;
radio_button27030.cljs$core$IFn$_invoke$arity$2 = radio_button27030__2;
radio_button27030.cljs$core$IFn$_invoke$arity$3 = radio_button27030__3;
return radio_button27030;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button27030);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27031 = (function() {
var select_options27031 = null;
var select_options27031__1 = (function (coll){return select_options27031.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options27031__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__27040(s__27041){return (new cljs.core.LazySeq(null,(function (){var s__27041__$1 = s__27041;while(true){
var temp__4092__auto__ = cljs.core.seq(s__27041__$1);if(temp__4092__auto__)
{var s__27041__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__27041__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__27041__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__27043 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__27042 = 0;while(true){
if((i__27042 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__27042);cljs.core.chunk_append(b__27043,((cljs.core.sequential_QMARK_(x))?(function (){var vec__27046 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27046,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27046,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,text], null),select_options27031.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,val,cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__27048 = (i__27042 + 1);
i__27042 = G__27048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__27043),iter__27040(cljs.core.chunk_rest(s__27041__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__27043),null);
}
} else
{var x = cljs.core.first(s__27041__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__27047 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27047,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$277,text], null),select_options27031.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$229,val,cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__27040(cljs.core.rest(s__27041__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options27031 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27031__1.call(this,coll);
case 2:
return select_options27031__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27031.cljs$core$IFn$_invoke$arity$1 = select_options27031__1;
select_options27031.cljs$core$IFn$_invoke$arity$2 = select_options27031__2;
return select_options27031;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options27031);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27049 = (function() {
var drop_down27049 = null;
var drop_down27049__2 = (function (name,options){return drop_down27049.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down27049__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,sablono.core.make_name(name),cljs.core.constant$keyword$260,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down27049 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27049__2.call(this,name,options);
case 3:
return drop_down27049__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27049.cljs$core$IFn$_invoke$arity$2 = drop_down27049__2;
drop_down27049.cljs$core$IFn$_invoke$arity$3 = drop_down27049__3;
return drop_down27049;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down27049);
/**
* Creates a text area element.
*/
sablono.core.text_area27050 = (function() {
var text_area27050 = null;
var text_area27050__1 = (function (name){return text_area27050.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area27050__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$274,sablono.core.make_name(name),cljs.core.constant$keyword$260,sablono.core.make_id(name),cljs.core.constant$keyword$229,value], null)], null);
});
text_area27050 = function(name,value){
switch(arguments.length){
case 1:
return text_area27050__1.call(this,name);
case 2:
return text_area27050__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27050.cljs$core$IFn$_invoke$arity$1 = text_area27050__1;
text_area27050.cljs$core$IFn$_invoke$arity$2 = text_area27050__2;
return text_area27050;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area27050);
/**
* Creates a file upload input.
*/
sablono.core.file_upload27051 = (function file_upload27051(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload27051);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27052 = (function label27052(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label27052);
/**
* Creates a submit button.
*/
sablono.core.submit_button27053 = (function submit_button27053(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,"submit",cljs.core.constant$keyword$229,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button27053);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27054 = (function reset_button27054(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$264,"reset",cljs.core.constant$keyword$229,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button27054);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27055 = (function() { 
var form_to27055__delegate = function (p__27056,body){var vec__27058 = p__27056;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27058,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27058,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$281,null,cljs.core.constant$keyword$282,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$284,method_str,cljs.core.constant$keyword$285,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$283,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$284,"POST",cljs.core.constant$keyword$285,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to27055 = function (p__27056,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27055__delegate.call(this,p__27056,body);};
form_to27055.cljs$lang$maxFixedArity = 1;
form_to27055.cljs$lang$applyTo = (function (arglist__27059){
var p__27056 = cljs.core.first(arglist__27059);
var body = cljs.core.rest(arglist__27059);
return form_to27055__delegate(p__27056,body);
});
form_to27055.cljs$core$IFn$_invoke$arity$variadic = form_to27055__delegate;
return form_to27055;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to27055);
