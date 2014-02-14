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
var G__26839__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__26838 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26838,0,null);var body = cljs.core.nthnext(vec__26838,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__26839 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26839__delegate.call(this,args);};
G__26839.cljs$lang$maxFixedArity = 0;
G__26839.cljs$lang$applyTo = (function (arglist__26840){
var args = cljs.core.seq(arglist__26840);
return G__26839__delegate(args);
});
G__26839.cljs$core$IFn$_invoke$arity$variadic = G__26839__delegate;
return G__26839;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__26845(s__26846){return (new cljs.core.LazySeq(null,(function (){var s__26846__$1 = s__26846;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26846__$1);if(temp__4092__auto__)
{var s__26846__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26846__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26846__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26848 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26847 = 0;while(true){
if((i__26847 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26847);cljs.core.chunk_append(b__26848,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__26849 = (i__26847 + 1);
i__26847 = G__26849;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26848),iter__26845(cljs.core.chunk_rest(s__26846__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26848),null);
}
} else
{var args = cljs.core.first(s__26846__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__26845(cljs.core.rest(s__26846__$2)));
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
sablono.core.render = (function render(component){var html = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);React.renderComponentToString(component,(function (p1__26850_SHARP_){return cljs.core.reset_BANG_(html,p1__26850_SHARP_);
}));
return cljs.core.deref(html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__26855(s__26856){return (new cljs.core.LazySeq(null,(function (){var s__26856__$1 = s__26856;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26856__$1);if(temp__4092__auto__)
{var s__26856__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26856__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26856__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26858 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26857 = 0;while(true){
if((i__26857 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26857);cljs.core.chunk_append(b__26858,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$259,"text/css",cljs.core.constant$keyword$260,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$261,"stylesheet"], null)], null));
{
var G__26859 = (i__26857 + 1);
i__26857 = G__26859;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26858),iter__26855(cljs.core.chunk_rest(s__26856__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26858),null);
}
} else
{var style = cljs.core.first(s__26856__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$259,"text/css",cljs.core.constant$keyword$260,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$261,"stylesheet"], null)], null),iter__26855(cljs.core.rest(s__26856__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26860){
var styles = cljs.core.seq(arglist__26860);
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
sablono.core.link_to26861 = (function() { 
var link_to26861__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to26861 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26861__delegate.call(this,url,content);};
link_to26861.cljs$lang$maxFixedArity = 1;
link_to26861.cljs$lang$applyTo = (function (arglist__26862){
var url = cljs.core.first(arglist__26862);
var content = cljs.core.rest(arglist__26862);
return link_to26861__delegate(url,content);
});
link_to26861.cljs$core$IFn$_invoke$arity$variadic = link_to26861__delegate;
return link_to26861;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to26861);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26863 = (function() { 
var mail_to26863__delegate = function (e_mail,p__26864){var vec__26866 = p__26864;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26866,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26863 = function (e_mail,var_args){
var p__26864 = null;if (arguments.length > 1) {
  p__26864 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26863__delegate.call(this,e_mail,p__26864);};
mail_to26863.cljs$lang$maxFixedArity = 1;
mail_to26863.cljs$lang$applyTo = (function (arglist__26867){
var e_mail = cljs.core.first(arglist__26867);
var p__26864 = cljs.core.rest(arglist__26867);
return mail_to26863__delegate(e_mail,p__26864);
});
mail_to26863.cljs$core$IFn$_invoke$arity$variadic = mail_to26863__delegate;
return mail_to26863;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to26863);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26868 = (function unordered_list26868(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,(function (){var iter__4117__auto__ = (function iter__26873(s__26874){return (new cljs.core.LazySeq(null,(function (){var s__26874__$1 = s__26874;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26874__$1);if(temp__4092__auto__)
{var s__26874__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26874__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26874__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26876 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26875 = 0;while(true){
if((i__26875 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26875);cljs.core.chunk_append(b__26876,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,x], null));
{
var G__26877 = (i__26875 + 1);
i__26875 = G__26877;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26876),iter__26873(cljs.core.chunk_rest(s__26874__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26876),null);
}
} else
{var x = cljs.core.first(s__26874__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,x], null),iter__26873(cljs.core.rest(s__26874__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list26868);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26878 = (function ordered_list26878(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$265,(function (){var iter__4117__auto__ = (function iter__26883(s__26884){return (new cljs.core.LazySeq(null,(function (){var s__26884__$1 = s__26884;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26884__$1);if(temp__4092__auto__)
{var s__26884__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26884__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26884__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26886 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26885 = 0;while(true){
if((i__26885 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26885);cljs.core.chunk_append(b__26886,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,x], null));
{
var G__26887 = (i__26885 + 1);
i__26885 = G__26887;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26886),iter__26883(cljs.core.chunk_rest(s__26884__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26886),null);
}
} else
{var x = cljs.core.first(s__26884__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,x], null),iter__26883(cljs.core.rest(s__26884__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list26878);
/**
* Create an image element.
*/
sablono.core.image26888 = (function() {
var image26888 = null;
var image26888__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image26888__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$267,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$268,alt], null)], null);
});
image26888 = function(src,alt){
switch(arguments.length){
case 1:
return image26888__1.call(this,src);
case 2:
return image26888__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26888.cljs$core$IFn$_invoke$arity$1 = image26888__1;
image26888.cljs$core$IFn$_invoke$arity$2 = image26888__2;
return image26888;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image26888);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26889_SHARP_,p2__26890_SHARP_){return [cljs.core.str(p1__26889_SHARP_),cljs.core.str("["),cljs.core.str(p2__26890_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__26891_SHARP_,p2__26892_SHARP_){return [cljs.core.str(p1__26891_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26892_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$259,type,cljs.core.constant$keyword$269,sablono.core.make_name(name),cljs.core.constant$keyword$255,sablono.core.make_id(name),cljs.core.constant$keyword$226,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26893 = (function() {
var hidden_field26893 = null;
var hidden_field26893__1 = (function (name){return hidden_field26893.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field26893__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field26893 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field26893__1.call(this,name);
case 2:
return hidden_field26893__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26893.cljs$core$IFn$_invoke$arity$1 = hidden_field26893__1;
hidden_field26893.cljs$core$IFn$_invoke$arity$2 = hidden_field26893__2;
return hidden_field26893;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field26893);
/**
* Creates a new text input field.
*/
sablono.core.text_field26894 = (function() {
var text_field26894 = null;
var text_field26894__1 = (function (name){return text_field26894.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field26894__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field26894 = function(name,value){
switch(arguments.length){
case 1:
return text_field26894__1.call(this,name);
case 2:
return text_field26894__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26894.cljs$core$IFn$_invoke$arity$1 = text_field26894__1;
text_field26894.cljs$core$IFn$_invoke$arity$2 = text_field26894__2;
return text_field26894;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field26894);
/**
* Creates a new password field.
*/
sablono.core.password_field26895 = (function() {
var password_field26895 = null;
var password_field26895__1 = (function (name){return password_field26895.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field26895__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field26895 = function(name,value){
switch(arguments.length){
case 1:
return password_field26895__1.call(this,name);
case 2:
return password_field26895__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26895.cljs$core$IFn$_invoke$arity$1 = password_field26895__1;
password_field26895.cljs$core$IFn$_invoke$arity$2 = password_field26895__2;
return password_field26895;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field26895);
/**
* Creates a new email input field.
*/
sablono.core.email_field26896 = (function() {
var email_field26896 = null;
var email_field26896__1 = (function (name){return email_field26896.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field26896__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field26896 = function(name,value){
switch(arguments.length){
case 1:
return email_field26896__1.call(this,name);
case 2:
return email_field26896__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26896.cljs$core$IFn$_invoke$arity$1 = email_field26896__1;
email_field26896.cljs$core$IFn$_invoke$arity$2 = email_field26896__2;
return email_field26896;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field26896);
/**
* Creates a check box.
*/
sablono.core.check_box26897 = (function() {
var check_box26897 = null;
var check_box26897__1 = (function (name){return check_box26897.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box26897__2 = (function (name,checked_QMARK_){return check_box26897.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box26897__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$259,"checkbox",cljs.core.constant$keyword$269,sablono.core.make_name(name),cljs.core.constant$keyword$255,sablono.core.make_id(name),cljs.core.constant$keyword$226,value,cljs.core.constant$keyword$270,checked_QMARK_], null)], null);
});
check_box26897 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26897__1.call(this,name);
case 2:
return check_box26897__2.call(this,name,checked_QMARK_);
case 3:
return check_box26897__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26897.cljs$core$IFn$_invoke$arity$1 = check_box26897__1;
check_box26897.cljs$core$IFn$_invoke$arity$2 = check_box26897__2;
check_box26897.cljs$core$IFn$_invoke$arity$3 = check_box26897__3;
return check_box26897;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box26897);
/**
* Creates a radio button.
*/
sablono.core.radio_button26898 = (function() {
var radio_button26898 = null;
var radio_button26898__1 = (function (group){return radio_button26898.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button26898__2 = (function (group,checked_QMARK_){return radio_button26898.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button26898__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$259,"radio",cljs.core.constant$keyword$269,sablono.core.make_name(group),cljs.core.constant$keyword$255,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$226,value,cljs.core.constant$keyword$270,checked_QMARK_], null)], null);
});
radio_button26898 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26898__1.call(this,group);
case 2:
return radio_button26898__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26898__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26898.cljs$core$IFn$_invoke$arity$1 = radio_button26898__1;
radio_button26898.cljs$core$IFn$_invoke$arity$2 = radio_button26898__2;
radio_button26898.cljs$core$IFn$_invoke$arity$3 = radio_button26898__3;
return radio_button26898;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button26898);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26899 = (function() {
var select_options26899 = null;
var select_options26899__1 = (function (coll){return select_options26899.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options26899__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__26908(s__26909){return (new cljs.core.LazySeq(null,(function (){var s__26909__$1 = s__26909;while(true){
var temp__4092__auto__ = cljs.core.seq(s__26909__$1);if(temp__4092__auto__)
{var s__26909__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__26909__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__26909__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__26911 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__26910 = 0;while(true){
if((i__26910 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__26910);cljs.core.chunk_append(b__26911,((cljs.core.sequential_QMARK_(x))?(function (){var vec__26914 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26914,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26914,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,text], null),select_options26899.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$226,val,cljs.core.constant$keyword$274,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$274,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__26916 = (i__26910 + 1);
i__26910 = G__26916;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__26911),iter__26908(cljs.core.chunk_rest(s__26909__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__26911),null);
}
} else
{var x = cljs.core.first(s__26909__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__26915 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26915,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,text], null),select_options26899.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$226,val,cljs.core.constant$keyword$274,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$274,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__26908(cljs.core.rest(s__26909__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options26899 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26899__1.call(this,coll);
case 2:
return select_options26899__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26899.cljs$core$IFn$_invoke$arity$1 = select_options26899__1;
select_options26899.cljs$core$IFn$_invoke$arity$2 = select_options26899__2;
return select_options26899;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options26899);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26917 = (function() {
var drop_down26917 = null;
var drop_down26917__2 = (function (name,options){return drop_down26917.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down26917__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,sablono.core.make_name(name),cljs.core.constant$keyword$255,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down26917 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26917__2.call(this,name,options);
case 3:
return drop_down26917__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26917.cljs$core$IFn$_invoke$arity$2 = drop_down26917__2;
drop_down26917.cljs$core$IFn$_invoke$arity$3 = drop_down26917__3;
return drop_down26917;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down26917);
/**
* Creates a text area element.
*/
sablono.core.text_area26918 = (function() {
var text_area26918 = null;
var text_area26918__1 = (function (name){return text_area26918.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area26918__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$269,sablono.core.make_name(name),cljs.core.constant$keyword$255,sablono.core.make_id(name),cljs.core.constant$keyword$226,value], null)], null);
});
text_area26918 = function(name,value){
switch(arguments.length){
case 1:
return text_area26918__1.call(this,name);
case 2:
return text_area26918__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26918.cljs$core$IFn$_invoke$arity$1 = text_area26918__1;
text_area26918.cljs$core$IFn$_invoke$arity$2 = text_area26918__2;
return text_area26918;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area26918);
/**
* Creates a file upload input.
*/
sablono.core.file_upload26919 = (function file_upload26919(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload26919);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26920 = (function label26920(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$252,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label26920);
/**
* Creates a submit button.
*/
sablono.core.submit_button26921 = (function submit_button26921(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,"submit",cljs.core.constant$keyword$226,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button26921);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26922 = (function reset_button26922(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$259,"reset",cljs.core.constant$keyword$226,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button26922);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26923 = (function() { 
var form_to26923__delegate = function (p__26924,body){var vec__26926 = p__26924;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26926,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26926,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$276,null,cljs.core.constant$keyword$277,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,method_str,cljs.core.constant$keyword$280,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$279,"POST",cljs.core.constant$keyword$280,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to26923 = function (p__26924,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26923__delegate.call(this,p__26924,body);};
form_to26923.cljs$lang$maxFixedArity = 1;
form_to26923.cljs$lang$applyTo = (function (arglist__26927){
var p__26924 = cljs.core.first(arglist__26927);
var body = cljs.core.rest(arglist__26927);
return form_to26923__delegate(p__26924,body);
});
form_to26923.cljs$core$IFn$_invoke$arity$variadic = form_to26923__delegate;
return form_to26923;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to26923);
