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
var G__24951__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__24950 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24950,0,null);var body = cljs.core.nthnext(vec__24950,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24951 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24951__delegate.call(this,args);};
G__24951.cljs$lang$maxFixedArity = 0;
G__24951.cljs$lang$applyTo = (function (arglist__24952){
var args = cljs.core.seq(arglist__24952);
return G__24951__delegate(args);
});
G__24951.cljs$core$IFn$_invoke$arity$variadic = G__24951__delegate;
return G__24951;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__24957(s__24958){return (new cljs.core.LazySeq(null,(function (){var s__24958__$1 = s__24958;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24958__$1);if(temp__4092__auto__)
{var s__24958__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24958__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24958__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24960 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24959 = 0;while(true){
if((i__24959 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24959);cljs.core.chunk_append(b__24960,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__24961 = (i__24959 + 1);
i__24959 = G__24961;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24960),iter__24957(cljs.core.chunk_rest(s__24958__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24960),null);
}
} else
{var args = cljs.core.first(s__24958__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__24957(cljs.core.rest(s__24958__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__24962_SHARP_){return cljs.core.reset_BANG_(html,p1__24962_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__24967(s__24968){return (new cljs.core.LazySeq(null,(function (){var s__24968__$1 = s__24968;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24968__$1);if(temp__4092__auto__)
{var s__24968__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24968__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24968__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24970 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24969 = 0;while(true){
if((i__24969 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24969);cljs.core.chunk_append(b__24970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$158,"text/css",cljs.core.constant$keyword$159,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$160,"stylesheet"], null)], null));
{
var G__24971 = (i__24969 + 1);
i__24969 = G__24971;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24970),iter__24967(cljs.core.chunk_rest(s__24968__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24970),null);
}
} else
{var style = cljs.core.first(s__24968__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$158,"text/css",cljs.core.constant$keyword$159,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$160,"stylesheet"], null)], null),iter__24967(cljs.core.rest(s__24968__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__24972){
var styles = cljs.core.seq(arglist__24972);
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
sablono.core.link_to24973 = (function() { 
var link_to24973__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24973 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to24973__delegate.call(this,url,content);};
link_to24973.cljs$lang$maxFixedArity = 1;
link_to24973.cljs$lang$applyTo = (function (arglist__24974){
var url = cljs.core.first(arglist__24974);
var content = cljs.core.rest(arglist__24974);
return link_to24973__delegate(url,content);
});
link_to24973.cljs$core$IFn$_invoke$arity$variadic = link_to24973__delegate;
return link_to24973;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24973);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24975 = (function() { 
var mail_to24975__delegate = function (e_mail,p__24976){var vec__24978 = p__24976;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24978,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to24975 = function (e_mail,var_args){
var p__24976 = null;if (arguments.length > 1) {
  p__24976 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to24975__delegate.call(this,e_mail,p__24976);};
mail_to24975.cljs$lang$maxFixedArity = 1;
mail_to24975.cljs$lang$applyTo = (function (arglist__24979){
var e_mail = cljs.core.first(arglist__24979);
var p__24976 = cljs.core.rest(arglist__24979);
return mail_to24975__delegate(e_mail,p__24976);
});
mail_to24975.cljs$core$IFn$_invoke$arity$variadic = mail_to24975__delegate;
return mail_to24975;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24975);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24980 = (function unordered_list24980(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$162,(function (){var iter__4117__auto__ = (function iter__24985(s__24986){return (new cljs.core.LazySeq(null,(function (){var s__24986__$1 = s__24986;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24986__$1);if(temp__4092__auto__)
{var s__24986__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24986__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24986__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24988 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24987 = 0;while(true){
if((i__24987 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24987);cljs.core.chunk_append(b__24988,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163,x], null));
{
var G__24989 = (i__24987 + 1);
i__24987 = G__24989;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24988),iter__24985(cljs.core.chunk_rest(s__24986__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24988),null);
}
} else
{var x = cljs.core.first(s__24986__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163,x], null),iter__24985(cljs.core.rest(s__24986__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24980);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24990 = (function ordered_list24990(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$164,(function (){var iter__4117__auto__ = (function iter__24995(s__24996){return (new cljs.core.LazySeq(null,(function (){var s__24996__$1 = s__24996;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24996__$1);if(temp__4092__auto__)
{var s__24996__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24996__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24996__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24998 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24997 = 0;while(true){
if((i__24997 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24997);cljs.core.chunk_append(b__24998,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163,x], null));
{
var G__24999 = (i__24997 + 1);
i__24997 = G__24999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24998),iter__24995(cljs.core.chunk_rest(s__24996__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24998),null);
}
} else
{var x = cljs.core.first(s__24996__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$163,x], null),iter__24995(cljs.core.rest(s__24996__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24990);
/**
* Create an image element.
*/
sablono.core.image25000 = (function() {
var image25000 = null;
var image25000__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$166,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image25000__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$165,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$166,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$167,alt], null)], null);
});
image25000 = function(src,alt){
switch(arguments.length){
case 1:
return image25000__1.call(this,src);
case 2:
return image25000__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image25000.cljs$core$IFn$_invoke$arity$1 = image25000__1;
image25000.cljs$core$IFn$_invoke$arity$2 = image25000__2;
return image25000;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image25000);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25001_SHARP_,p2__25002_SHARP_){return [cljs.core.str(p1__25001_SHARP_),cljs.core.str("["),cljs.core.str(p2__25002_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__25003_SHARP_,p2__25004_SHARP_){return [cljs.core.str(p1__25003_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25004_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$158,type,cljs.core.constant$keyword$169,sablono.core.make_name(name),cljs.core.constant$keyword$155,sablono.core.make_id(name),cljs.core.constant$keyword$129,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field25005 = (function() {
var hidden_field25005 = null;
var hidden_field25005__1 = (function (name){return hidden_field25005.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field25005__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field25005 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field25005__1.call(this,name);
case 2:
return hidden_field25005__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field25005.cljs$core$IFn$_invoke$arity$1 = hidden_field25005__1;
hidden_field25005.cljs$core$IFn$_invoke$arity$2 = hidden_field25005__2;
return hidden_field25005;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field25005);
/**
* Creates a new text input field.
*/
sablono.core.text_field25006 = (function() {
var text_field25006 = null;
var text_field25006__1 = (function (name){return text_field25006.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field25006__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field25006 = function(name,value){
switch(arguments.length){
case 1:
return text_field25006__1.call(this,name);
case 2:
return text_field25006__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field25006.cljs$core$IFn$_invoke$arity$1 = text_field25006__1;
text_field25006.cljs$core$IFn$_invoke$arity$2 = text_field25006__2;
return text_field25006;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field25006);
/**
* Creates a new password field.
*/
sablono.core.password_field25007 = (function() {
var password_field25007 = null;
var password_field25007__1 = (function (name){return password_field25007.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field25007__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field25007 = function(name,value){
switch(arguments.length){
case 1:
return password_field25007__1.call(this,name);
case 2:
return password_field25007__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field25007.cljs$core$IFn$_invoke$arity$1 = password_field25007__1;
password_field25007.cljs$core$IFn$_invoke$arity$2 = password_field25007__2;
return password_field25007;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field25007);
/**
* Creates a new email input field.
*/
sablono.core.email_field25008 = (function() {
var email_field25008 = null;
var email_field25008__1 = (function (name){return email_field25008.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field25008__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field25008 = function(name,value){
switch(arguments.length){
case 1:
return email_field25008__1.call(this,name);
case 2:
return email_field25008__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field25008.cljs$core$IFn$_invoke$arity$1 = email_field25008__1;
email_field25008.cljs$core$IFn$_invoke$arity$2 = email_field25008__2;
return email_field25008;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field25008);
/**
* Creates a check box.
*/
sablono.core.check_box25009 = (function() {
var check_box25009 = null;
var check_box25009__1 = (function (name){return check_box25009.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box25009__2 = (function (name,checked_QMARK_){return check_box25009.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box25009__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$158,"checkbox",cljs.core.constant$keyword$169,sablono.core.make_name(name),cljs.core.constant$keyword$155,sablono.core.make_id(name),cljs.core.constant$keyword$129,value,cljs.core.constant$keyword$170,checked_QMARK_], null)], null);
});
check_box25009 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box25009__1.call(this,name);
case 2:
return check_box25009__2.call(this,name,checked_QMARK_);
case 3:
return check_box25009__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box25009.cljs$core$IFn$_invoke$arity$1 = check_box25009__1;
check_box25009.cljs$core$IFn$_invoke$arity$2 = check_box25009__2;
check_box25009.cljs$core$IFn$_invoke$arity$3 = check_box25009__3;
return check_box25009;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box25009);
/**
* Creates a radio button.
*/
sablono.core.radio_button25010 = (function() {
var radio_button25010 = null;
var radio_button25010__1 = (function (group){return radio_button25010.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button25010__2 = (function (group,checked_QMARK_){return radio_button25010.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button25010__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$158,"radio",cljs.core.constant$keyword$169,sablono.core.make_name(group),cljs.core.constant$keyword$155,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$129,value,cljs.core.constant$keyword$170,checked_QMARK_], null)], null);
});
radio_button25010 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button25010__1.call(this,group);
case 2:
return radio_button25010__2.call(this,group,checked_QMARK_);
case 3:
return radio_button25010__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button25010.cljs$core$IFn$_invoke$arity$1 = radio_button25010__1;
radio_button25010.cljs$core$IFn$_invoke$arity$2 = radio_button25010__2;
radio_button25010.cljs$core$IFn$_invoke$arity$3 = radio_button25010__3;
return radio_button25010;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button25010);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options25011 = (function() {
var select_options25011 = null;
var select_options25011__1 = (function (coll){return select_options25011.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options25011__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__25020(s__25021){return (new cljs.core.LazySeq(null,(function (){var s__25021__$1 = s__25021;while(true){
var temp__4092__auto__ = cljs.core.seq(s__25021__$1);if(temp__4092__auto__)
{var s__25021__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__25021__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__25021__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__25023 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__25022 = 0;while(true){
if((i__25022 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__25022);cljs.core.chunk_append(b__25023,((cljs.core.sequential_QMARK_(x))?(function (){var vec__25026 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25026,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25026,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$172,text], null),select_options25011.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,val,cljs.core.constant$keyword$174,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__25028 = (i__25022 + 1);
i__25022 = G__25028;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__25023),iter__25020(cljs.core.chunk_rest(s__25021__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__25023),null);
}
} else
{var x = cljs.core.first(s__25021__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__25027 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25027,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25027,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$172,text], null),select_options25011.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$129,val,cljs.core.constant$keyword$174,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$173,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$174,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__25020(cljs.core.rest(s__25021__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options25011 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options25011__1.call(this,coll);
case 2:
return select_options25011__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options25011.cljs$core$IFn$_invoke$arity$1 = select_options25011__1;
select_options25011.cljs$core$IFn$_invoke$arity$2 = select_options25011__2;
return select_options25011;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options25011);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down25029 = (function() {
var drop_down25029 = null;
var drop_down25029__2 = (function (name,options){return drop_down25029.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down25029__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,sablono.core.make_name(name),cljs.core.constant$keyword$155,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down25029 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down25029__2.call(this,name,options);
case 3:
return drop_down25029__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down25029.cljs$core$IFn$_invoke$arity$2 = drop_down25029__2;
drop_down25029.cljs$core$IFn$_invoke$arity$3 = drop_down25029__3;
return drop_down25029;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down25029);
/**
* Creates a text area element.
*/
sablono.core.text_area25030 = (function() {
var text_area25030 = null;
var text_area25030__1 = (function (name){return text_area25030.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area25030__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$169,sablono.core.make_name(name),cljs.core.constant$keyword$155,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area25030 = function(name,value){
switch(arguments.length){
case 1:
return text_area25030__1.call(this,name);
case 2:
return text_area25030__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area25030.cljs$core$IFn$_invoke$arity$1 = text_area25030__1;
text_area25030.cljs$core$IFn$_invoke$arity$2 = text_area25030__2;
return text_area25030;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area25030);
/**
* Creates a file upload input.
*/
sablono.core.file_upload25031 = (function file_upload25031(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload25031);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label25032 = (function label25032(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$172,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$152,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label25032);
/**
* Creates a submit button.
*/
sablono.core.submit_button25033 = (function submit_button25033(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,"submit",cljs.core.constant$keyword$129,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button25033);
/**
* Creates a form reset button.
*/
sablono.core.reset_button25034 = (function reset_button25034(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$168,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,"reset",cljs.core.constant$keyword$129,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button25034);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to25035 = (function() { 
var form_to25035__delegate = function (p__25036,body){var vec__25038 = p__25036;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25038,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25038,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$177,null,cljs.core.constant$keyword$178,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$180,method_str,cljs.core.constant$keyword$181,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$179,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$180,"POST",cljs.core.constant$keyword$181,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to25035 = function (p__25036,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to25035__delegate.call(this,p__25036,body);};
form_to25035.cljs$lang$maxFixedArity = 1;
form_to25035.cljs$lang$applyTo = (function (arglist__25039){
var p__25036 = cljs.core.first(arglist__25039);
var body = cljs.core.rest(arglist__25039);
return form_to25035__delegate(p__25036,body);
});
form_to25035.cljs$core$IFn$_invoke$arity$variadic = form_to25035__delegate;
return form_to25035;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to25035);
