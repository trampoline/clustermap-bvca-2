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
var G__25965__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__25964 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25964,0,null);var body = cljs.core.nthnext(vec__25964,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__25965 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__25965__delegate.call(this,args);};
G__25965.cljs$lang$maxFixedArity = 0;
G__25965.cljs$lang$applyTo = (function (arglist__25966){
var args = cljs.core.seq(arglist__25966);
return G__25965__delegate(args);
});
G__25965.cljs$core$IFn$_invoke$arity$variadic = G__25965__delegate;
return G__25965;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__25971(s__25972){return (new cljs.core.LazySeq(null,(function (){var s__25972__$1 = s__25972;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25972__$1);if(temp__4092__auto__)
{var s__25972__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25972__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25972__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25974 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25973 = 0;while(true){
if((i__25973 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25973);cljs.core.chunk_append(b__25974,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__25975 = (i__25973 + 1);
i__25973 = G__25975;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25974),iter__25971(cljs.core.chunk_rest(s__25972__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25974),null);
}
} else
{var args = cljs.core.first(s__25972__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__25971(cljs.core.rest(s__25972__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__25976_SHARP_){return cljs.core.reset_BANG_(html,p1__25976_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__25981(s__25982){return (new cljs.core.LazySeq(null,(function (){var s__25982__$1 = s__25982;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25982__$1);if(temp__4092__auto__)
{var s__25982__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25982__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25982__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25984 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25983 = 0;while(true){
if((i__25983 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25983);cljs.core.chunk_append(b__25984,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$220,"text/css",cljs.core.constant$keyword$221,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$222,"stylesheet"], null)], null));
{
var G__25985 = (i__25983 + 1);
i__25983 = G__25985;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25984),iter__25981(cljs.core.chunk_rest(s__25982__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25984),null);
}
} else
{var style = cljs.core.first(s__25982__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$219,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$220,"text/css",cljs.core.constant$keyword$221,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$222,"stylesheet"], null)], null),iter__25981(cljs.core.rest(s__25982__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__25986){
var styles = cljs.core.seq(arglist__25986);
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
sablono.core.link_to25987 = (function() { 
var link_to25987__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$221,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to25987 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to25987__delegate.call(this,url,content);};
link_to25987.cljs$lang$maxFixedArity = 1;
link_to25987.cljs$lang$applyTo = (function (arglist__25988){
var url = cljs.core.first(arglist__25988);
var content = cljs.core.rest(arglist__25988);
return link_to25987__delegate(url,content);
});
link_to25987.cljs$core$IFn$_invoke$arity$variadic = link_to25987__delegate;
return link_to25987;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to25987);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to25989 = (function() { 
var mail_to25989__delegate = function (e_mail,p__25990){var vec__25992 = p__25990;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25992,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$223,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$221,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to25989 = function (e_mail,var_args){
var p__25990 = null;if (arguments.length > 1) {
  p__25990 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to25989__delegate.call(this,e_mail,p__25990);};
mail_to25989.cljs$lang$maxFixedArity = 1;
mail_to25989.cljs$lang$applyTo = (function (arglist__25993){
var e_mail = cljs.core.first(arglist__25993);
var p__25990 = cljs.core.rest(arglist__25993);
return mail_to25989__delegate(e_mail,p__25990);
});
mail_to25989.cljs$core$IFn$_invoke$arity$variadic = mail_to25989__delegate;
return mail_to25989;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to25989);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list25994 = (function unordered_list25994(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$224,(function (){var iter__4117__auto__ = (function iter__25999(s__26000){return (new cljs.core.LazySeq(null,(function (){var s__26000__$1 = s__26000;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26000__$1);if(temp__4092__auto__)
{var s__26000__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26000__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26000__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26002 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26001 = 0;while(true){
if((i__26001 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26001);cljs.core.chunk_append(b__26002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,x], null));
{
var G__26003 = (i__26001 + 1);
i__26001 = G__26003;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26002),iter__25999(cljs.core.chunk_rest(s__26000__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26002),null);
}
} else
{var x = cljs.core.first(s__26000__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,x], null),iter__25999(cljs.core.rest(s__26000__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list25994);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26004 = (function ordered_list26004(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$226,(function (){var iter__4117__auto__ = (function iter__26009(s__26010){return (new cljs.core.LazySeq(null,(function (){var s__26010__$1 = s__26010;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26010__$1);if(temp__4092__auto__)
{var s__26010__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26010__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26010__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26012 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26011 = 0;while(true){
if((i__26011 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26011);cljs.core.chunk_append(b__26012,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,x], null));
{
var G__26013 = (i__26011 + 1);
i__26011 = G__26013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26012),iter__26009(cljs.core.chunk_rest(s__26010__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26012),null);
}
} else
{var x = cljs.core.first(s__26010__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$225,x], null),iter__26009(cljs.core.rest(s__26010__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26004);
/**
* Create an image element.
*/
sablono.core.image26014 = (function() {
var image26014 = null;
var image26014__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$228,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26014__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$227,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$228,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$229,alt], null)], null);
});
image26014 = function(src,alt){
switch(arguments.length){
case 1:
return image26014__1.call(this,src);
case 2:
return image26014__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26014.cljs$core$IFn$_invoke$arity$1 = image26014__1;
image26014.cljs$core$IFn$_invoke$arity$2 = image26014__2;
return image26014;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26014);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26015_SHARP_,p2__26016_SHARP_){return [cljs.core.str(p1__26015_SHARP_),cljs.core.str("["),cljs.core.str(p2__26016_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26017_SHARP_,p2__26018_SHARP_){return [cljs.core.str(p1__26017_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26018_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$220,type,cljs.core.constant$keyword$231,sablono.core.make_name(name),cljs.core.constant$keyword$217,sablono.core.make_id(name),cljs.core.constant$keyword$190,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26019 = (function() {
var hidden_field26019 = null;
var hidden_field26019__1 = (function (name){return hidden_field26019.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26019__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26019 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26019__1.call(this,name);
case 2:
return hidden_field26019__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26019.cljs$core$IFn$_invoke$arity$1 = hidden_field26019__1;
hidden_field26019.cljs$core$IFn$_invoke$arity$2 = hidden_field26019__2;
return hidden_field26019;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26019);
/**
* Creates a new text input field.
*/
sablono.core.text_field26020 = (function() {
var text_field26020 = null;
var text_field26020__1 = (function (name){return text_field26020.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26020__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26020 = function(name,value){
switch(arguments.length){
case 1:
return text_field26020__1.call(this,name);
case 2:
return text_field26020__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26020.cljs$core$IFn$_invoke$arity$1 = text_field26020__1;
text_field26020.cljs$core$IFn$_invoke$arity$2 = text_field26020__2;
return text_field26020;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26020);
/**
* Creates a new password field.
*/
sablono.core.password_field26021 = (function() {
var password_field26021 = null;
var password_field26021__1 = (function (name){return password_field26021.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26021__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26021 = function(name,value){
switch(arguments.length){
case 1:
return password_field26021__1.call(this,name);
case 2:
return password_field26021__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26021.cljs$core$IFn$_invoke$arity$1 = password_field26021__1;
password_field26021.cljs$core$IFn$_invoke$arity$2 = password_field26021__2;
return password_field26021;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26021);
/**
* Creates a new email input field.
*/
sablono.core.email_field26022 = (function() {
var email_field26022 = null;
var email_field26022__1 = (function (name){return email_field26022.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26022__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26022 = function(name,value){
switch(arguments.length){
case 1:
return email_field26022__1.call(this,name);
case 2:
return email_field26022__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26022.cljs$core$IFn$_invoke$arity$1 = email_field26022__1;
email_field26022.cljs$core$IFn$_invoke$arity$2 = email_field26022__2;
return email_field26022;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26022);
/**
* Creates a check box.
*/
sablono.core.check_box26023 = (function() {
var check_box26023 = null;
var check_box26023__1 = (function (name){return check_box26023.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26023__2 = (function (name,checked_QMARK_){return check_box26023.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26023__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$220,"checkbox",cljs.core.constant$keyword$231,sablono.core.make_name(name),cljs.core.constant$keyword$217,sablono.core.make_id(name),cljs.core.constant$keyword$190,value,cljs.core.constant$keyword$232,checked_QMARK_], null)], null);
});
check_box26023 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26023__1.call(this,name);
case 2:
return check_box26023__2.call(this,name,checked_QMARK_);
case 3:
return check_box26023__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26023.cljs$core$IFn$_invoke$arity$1 = check_box26023__1;
check_box26023.cljs$core$IFn$_invoke$arity$2 = check_box26023__2;
check_box26023.cljs$core$IFn$_invoke$arity$3 = check_box26023__3;
return check_box26023;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26023);
/**
* Creates a radio button.
*/
sablono.core.radio_button26024 = (function() {
var radio_button26024 = null;
var radio_button26024__1 = (function (group){return radio_button26024.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26024__2 = (function (group,checked_QMARK_){return radio_button26024.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26024__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$220,"radio",cljs.core.constant$keyword$231,sablono.core.make_name(group),cljs.core.constant$keyword$217,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$190,value,cljs.core.constant$keyword$232,checked_QMARK_], null)], null);
});
radio_button26024 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26024__1.call(this,group);
case 2:
return radio_button26024__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26024__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26024.cljs$core$IFn$_invoke$arity$1 = radio_button26024__1;
radio_button26024.cljs$core$IFn$_invoke$arity$2 = radio_button26024__2;
radio_button26024.cljs$core$IFn$_invoke$arity$3 = radio_button26024__3;
return radio_button26024;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26024);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26025 = (function() {
var select_options26025 = null;
var select_options26025__1 = (function (coll){return select_options26025.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26025__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26034(s__26035){return (new cljs.core.LazySeq(null,(function (){var s__26035__$1 = s__26035;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26035__$1);if(temp__4092__auto__)
{var s__26035__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26035__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26035__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26037 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26036 = 0;while(true){
if((i__26036 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26036);cljs.core.chunk_append(b__26037,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26040 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26040,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26040,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,text], null),select_options26025.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$190,val,cljs.core.constant$keyword$236,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26042 = (i__26036 + 1);
i__26036 = G__26042;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26037),iter__26034(cljs.core.chunk_rest(s__26035__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26037),null);
}
} else
{var x = cljs.core.first(s__26035__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26041 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26041,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$233,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$234,text], null),select_options26025.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$190,val,cljs.core.constant$keyword$236,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$235,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$236,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26034(cljs.core.rest(s__26035__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26025 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26025__1.call(this,coll);
case 2:
return select_options26025__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26025.cljs$core$IFn$_invoke$arity$1 = select_options26025__1;
select_options26025.cljs$core$IFn$_invoke$arity$2 = select_options26025__2;
return select_options26025;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26025);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26043 = (function() {
var drop_down26043 = null;
var drop_down26043__2 = (function (name,options){return drop_down26043.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26043__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$237,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,sablono.core.make_name(name),cljs.core.constant$keyword$217,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26043 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26043__2.call(this,name,options);
case 3:
return drop_down26043__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26043.cljs$core$IFn$_invoke$arity$2 = drop_down26043__2;
drop_down26043.cljs$core$IFn$_invoke$arity$3 = drop_down26043__3;
return drop_down26043;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26043);
/**
* Creates a text area element.
*/
sablono.core.text_area26044 = (function() {
var text_area26044 = null;
var text_area26044__1 = (function (name){return text_area26044.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26044__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$231,sablono.core.make_name(name),cljs.core.constant$keyword$217,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area26044 = function(name,value){
switch(arguments.length){
case 1:
return text_area26044__1.call(this,name);
case 2:
return text_area26044__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26044.cljs$core$IFn$_invoke$arity$1 = text_area26044__1;
text_area26044.cljs$core$IFn$_invoke$arity$2 = text_area26044__2;
return text_area26044;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26044);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26045 = (function file_upload26045(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26045);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26046 = (function label26046(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$214,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26046);
/**
* Creates a submit button.
*/
sablono.core.submit_button26047 = (function submit_button26047(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$220,"submit",cljs.core.constant$keyword$190,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26047);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26048 = (function reset_button26048(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$230,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$220,"reset",cljs.core.constant$keyword$190,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26048);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26049 = (function() { 
var form_to26049__delegate = function (p__26050,body){var vec__26052 = p__26050;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26052,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26052,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$239,null,cljs.core.constant$keyword$240,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,method_str,cljs.core.constant$keyword$243,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$241,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$242,"POST",cljs.core.constant$keyword$243,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26049 = function (p__26050,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26049__delegate.call(this,p__26050,body);};
form_to26049.cljs$lang$maxFixedArity = 1;
form_to26049.cljs$lang$applyTo = (function (arglist__26053){
var p__26050 = cljs.core.first(arglist__26053);
var body = cljs.core.rest(arglist__26053);
return form_to26049__delegate(p__26050,body);
});
form_to26049.cljs$core$IFn$_invoke$arity$variadic = form_to26049__delegate;
return form_to26049;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26049);
