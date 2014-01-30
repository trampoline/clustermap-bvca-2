// Compiled by ClojureScript 0.0-2138
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__16010__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__16009 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16009,0,null);var body = cljs.core.nthnext(vec__16009,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__16010 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__16010__delegate.call(this,args);};
G__16010.cljs$lang$maxFixedArity = 0;
G__16010.cljs$lang$applyTo = (function (arglist__16011){
var args = cljs.core.seq(arglist__16011);
return G__16010__delegate(args);
});
G__16010.cljs$core$IFn$_invoke$arity$variadic = G__16010__delegate;
return G__16010;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__16016(s__16017){return (new cljs.core.LazySeq(null,(function (){var s__16017__$1 = s__16017;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16017__$1);if(temp__4092__auto__)
{var s__16017__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16017__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16017__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16019 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16018 = 0;while(true){
if((i__16018 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16018);cljs.core.chunk_append(b__16019,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__16020 = (i__16018 + 1);
i__16018 = G__16020;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16019),iter__16016(cljs.core.chunk_rest(s__16017__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16019),null);
}
} else
{var args = cljs.core.first(s__16017__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__16016(cljs.core.rest(s__16017__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__16021_SHARP_){return cljs.core.reset_BANG_(html,p1__16021_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__16026(s__16027){return (new cljs.core.LazySeq(null,(function (){var s__16027__$1 = s__16027;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16027__$1);if(temp__4092__auto__)
{var s__16027__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16027__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16027__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16029 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16028 = 0;while(true){
if((i__16028 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16028);cljs.core.chunk_append(b__16029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$41,"text/css",cljs.core.constant$keyword$42,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$43,"stylesheet"], null)], null));
{
var G__16030 = (i__16028 + 1);
i__16028 = G__16030;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16029),iter__16026(cljs.core.chunk_rest(s__16027__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16029),null);
}
} else
{var style = cljs.core.first(s__16027__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$40,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$41,"text/css",cljs.core.constant$keyword$42,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$43,"stylesheet"], null)], null),iter__16026(cljs.core.rest(s__16027__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__16031){
var styles = cljs.core.seq(arglist__16031);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to16032 = (function() { 
var link_to16032__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to16032 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to16032__delegate.call(this,url,content);};
link_to16032.cljs$lang$maxFixedArity = 1;
link_to16032.cljs$lang$applyTo = (function (arglist__16033){
var url = cljs.core.first(arglist__16033);
var content = cljs.core.rest(arglist__16033);
return link_to16032__delegate(url,content);
});
link_to16032.cljs$core$IFn$_invoke$arity$variadic = link_to16032__delegate;
return link_to16032;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to16032);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to16034 = (function() { 
var mail_to16034__delegate = function (e_mail,p__16035){var vec__16037 = p__16035;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16037,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$44,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$42,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to16034 = function (e_mail,var_args){
var p__16035 = null;if (arguments.length > 1) {
  p__16035 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to16034__delegate.call(this,e_mail,p__16035);};
mail_to16034.cljs$lang$maxFixedArity = 1;
mail_to16034.cljs$lang$applyTo = (function (arglist__16038){
var e_mail = cljs.core.first(arglist__16038);
var p__16035 = cljs.core.rest(arglist__16038);
return mail_to16034__delegate(e_mail,p__16035);
});
mail_to16034.cljs$core$IFn$_invoke$arity$variadic = mail_to16034__delegate;
return mail_to16034;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to16034);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list16039 = (function unordered_list16039(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$45,(function (){var iter__4117__auto__ = (function iter__16044(s__16045){return (new cljs.core.LazySeq(null,(function (){var s__16045__$1 = s__16045;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16045__$1);if(temp__4092__auto__)
{var s__16045__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16045__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16045__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16047 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16046 = 0;while(true){
if((i__16046 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16046);cljs.core.chunk_append(b__16047,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null));
{
var G__16048 = (i__16046 + 1);
i__16046 = G__16048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16047),iter__16044(cljs.core.chunk_rest(s__16045__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16047),null);
}
} else
{var x = cljs.core.first(s__16045__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null),iter__16044(cljs.core.rest(s__16045__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list16039);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list16049 = (function ordered_list16049(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$47,(function (){var iter__4117__auto__ = (function iter__16054(s__16055){return (new cljs.core.LazySeq(null,(function (){var s__16055__$1 = s__16055;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16055__$1);if(temp__4092__auto__)
{var s__16055__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16055__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16055__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16057 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16056 = 0;while(true){
if((i__16056 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16056);cljs.core.chunk_append(b__16057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null));
{
var G__16058 = (i__16056 + 1);
i__16056 = G__16058;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16057),iter__16054(cljs.core.chunk_rest(s__16055__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16057),null);
}
} else
{var x = cljs.core.first(s__16055__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$46,x], null),iter__16054(cljs.core.rest(s__16055__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list16049);
/**
* Create an image element.
*/
sablono.core.image16059 = (function() {
var image16059 = null;
var image16059__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$49,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image16059__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$48,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$49,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$50,alt], null)], null);
});
image16059 = function(src,alt){
switch(arguments.length){
case 1:
return image16059__1.call(this,src);
case 2:
return image16059__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image16059.cljs$core$IFn$_invoke$arity$1 = image16059__1;
image16059.cljs$core$IFn$_invoke$arity$2 = image16059__2;
return image16059;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image16059);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16060_SHARP_,p2__16061_SHARP_){return [cljs.core.str(p1__16060_SHARP_),cljs.core.str("["),cljs.core.str(p2__16061_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__16062_SHARP_,p2__16063_SHARP_){return [cljs.core.str(p1__16062_SHARP_),cljs.core.str("-"),cljs.core.str(p2__16063_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$41,type,cljs.core.constant$keyword$52,sablono.core.make_name(name),cljs.core.constant$keyword$38,sablono.core.make_id(name),cljs.core.constant$keyword$11,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field16064 = (function() {
var hidden_field16064 = null;
var hidden_field16064__1 = (function (name){return hidden_field16064.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field16064__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field16064 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field16064__1.call(this,name);
case 2:
return hidden_field16064__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field16064.cljs$core$IFn$_invoke$arity$1 = hidden_field16064__1;
hidden_field16064.cljs$core$IFn$_invoke$arity$2 = hidden_field16064__2;
return hidden_field16064;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field16064);
/**
* Creates a new text input field.
*/
sablono.core.text_field16065 = (function() {
var text_field16065 = null;
var text_field16065__1 = (function (name){return text_field16065.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field16065__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field16065 = function(name,value){
switch(arguments.length){
case 1:
return text_field16065__1.call(this,name);
case 2:
return text_field16065__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field16065.cljs$core$IFn$_invoke$arity$1 = text_field16065__1;
text_field16065.cljs$core$IFn$_invoke$arity$2 = text_field16065__2;
return text_field16065;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field16065);
/**
* Creates a new password field.
*/
sablono.core.password_field16066 = (function() {
var password_field16066 = null;
var password_field16066__1 = (function (name){return password_field16066.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field16066__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field16066 = function(name,value){
switch(arguments.length){
case 1:
return password_field16066__1.call(this,name);
case 2:
return password_field16066__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field16066.cljs$core$IFn$_invoke$arity$1 = password_field16066__1;
password_field16066.cljs$core$IFn$_invoke$arity$2 = password_field16066__2;
return password_field16066;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field16066);
/**
* Creates a new email input field.
*/
sablono.core.email_field16067 = (function() {
var email_field16067 = null;
var email_field16067__1 = (function (name){return email_field16067.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field16067__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field16067 = function(name,value){
switch(arguments.length){
case 1:
return email_field16067__1.call(this,name);
case 2:
return email_field16067__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field16067.cljs$core$IFn$_invoke$arity$1 = email_field16067__1;
email_field16067.cljs$core$IFn$_invoke$arity$2 = email_field16067__2;
return email_field16067;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field16067);
/**
* Creates a check box.
*/
sablono.core.check_box16068 = (function() {
var check_box16068 = null;
var check_box16068__1 = (function (name){return check_box16068.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box16068__2 = (function (name,checked_QMARK_){return check_box16068.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box16068__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$41,"checkbox",cljs.core.constant$keyword$52,sablono.core.make_name(name),cljs.core.constant$keyword$38,sablono.core.make_id(name),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$53,checked_QMARK_], null)], null);
});
check_box16068 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box16068__1.call(this,name);
case 2:
return check_box16068__2.call(this,name,checked_QMARK_);
case 3:
return check_box16068__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box16068.cljs$core$IFn$_invoke$arity$1 = check_box16068__1;
check_box16068.cljs$core$IFn$_invoke$arity$2 = check_box16068__2;
check_box16068.cljs$core$IFn$_invoke$arity$3 = check_box16068__3;
return check_box16068;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box16068);
/**
* Creates a radio button.
*/
sablono.core.radio_button16069 = (function() {
var radio_button16069 = null;
var radio_button16069__1 = (function (group){return radio_button16069.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button16069__2 = (function (group,checked_QMARK_){return radio_button16069.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button16069__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$41,"radio",cljs.core.constant$keyword$52,sablono.core.make_name(group),cljs.core.constant$keyword$38,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$11,value,cljs.core.constant$keyword$53,checked_QMARK_], null)], null);
});
radio_button16069 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button16069__1.call(this,group);
case 2:
return radio_button16069__2.call(this,group,checked_QMARK_);
case 3:
return radio_button16069__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button16069.cljs$core$IFn$_invoke$arity$1 = radio_button16069__1;
radio_button16069.cljs$core$IFn$_invoke$arity$2 = radio_button16069__2;
radio_button16069.cljs$core$IFn$_invoke$arity$3 = radio_button16069__3;
return radio_button16069;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button16069);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options16070 = (function() {
var select_options16070 = null;
var select_options16070__1 = (function (coll){return select_options16070.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options16070__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__16079(s__16080){return (new cljs.core.LazySeq(null,(function (){var s__16080__$1 = s__16080;while(true){
var temp__4092__auto__ = cljs.core.seq(s__16080__$1);if(temp__4092__auto__)
{var s__16080__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__16080__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__16080__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__16082 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__16081 = 0;while(true){
if((i__16081 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__16081);cljs.core.chunk_append(b__16082,((cljs.core.sequential_QMARK_(x))?(function (){var vec__16085 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16085,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16085,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,text], null),select_options16070.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__16087 = (i__16081 + 1);
i__16081 = G__16087;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__16082),iter__16079(cljs.core.chunk_rest(s__16080__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__16082),null);
}
} else
{var x = cljs.core.first(s__16080__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__16086 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16086,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$54,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$55,text], null),select_options16070.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$11,val,cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$56,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__16079(cljs.core.rest(s__16080__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options16070 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options16070__1.call(this,coll);
case 2:
return select_options16070__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options16070.cljs$core$IFn$_invoke$arity$1 = select_options16070__1;
select_options16070.cljs$core$IFn$_invoke$arity$2 = select_options16070__2;
return select_options16070;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options16070);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down16088 = (function() {
var drop_down16088 = null;
var drop_down16088__2 = (function (name,options){return drop_down16088.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down16088__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,sablono.core.make_name(name),cljs.core.constant$keyword$38,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down16088 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down16088__2.call(this,name,options);
case 3:
return drop_down16088__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down16088.cljs$core$IFn$_invoke$arity$2 = drop_down16088__2;
drop_down16088.cljs$core$IFn$_invoke$arity$3 = drop_down16088__3;
return drop_down16088;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down16088);
/**
* Creates a text area element.
*/
sablono.core.text_area16089 = (function() {
var text_area16089 = null;
var text_area16089__1 = (function (name){return text_area16089.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area16089__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$59,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$52,sablono.core.make_name(name),cljs.core.constant$keyword$38,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area16089 = function(name,value){
switch(arguments.length){
case 1:
return text_area16089__1.call(this,name);
case 2:
return text_area16089__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area16089.cljs$core$IFn$_invoke$arity$1 = text_area16089__1;
text_area16089.cljs$core$IFn$_invoke$arity$2 = text_area16089__2;
return text_area16089;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area16089);
/**
* Creates a file upload input.
*/
sablono.core.file_upload16090 = (function file_upload16090(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload16090);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label16091 = (function label16091(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$55,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$35,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label16091);
/**
* Creates a submit button.
*/
sablono.core.submit_button16092 = (function submit_button16092(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,"submit",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button16092);
/**
* Creates a form reset button.
*/
sablono.core.reset_button16093 = (function reset_button16093(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$51,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$41,"reset",cljs.core.constant$keyword$11,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button16093);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to16094 = (function() { 
var form_to16094__delegate = function (p__16095,body){var vec__16097 = p__16095;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16097,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16097,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$60,null,cljs.core.constant$keyword$61,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,method_str,cljs.core.constant$keyword$64,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$63,"POST",cljs.core.constant$keyword$64,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to16094 = function (p__16095,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to16094__delegate.call(this,p__16095,body);};
form_to16094.cljs$lang$maxFixedArity = 1;
form_to16094.cljs$lang$applyTo = (function (arglist__16098){
var p__16095 = cljs.core.first(arglist__16098);
var body = cljs.core.rest(arglist__16098);
return form_to16094__delegate(p__16095,body);
});
form_to16094.cljs$core$IFn$_invoke$arity$variadic = form_to16094__delegate;
return form_to16094;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to16094);
