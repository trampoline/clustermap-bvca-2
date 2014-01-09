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
var G__24584__delegate = function (args){if(cljs.core.map_QMARK_(cljs.core.first(args)))
{var vec__24583 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24583,0,null);var body = cljs.core.nthnext(vec__24583,1);if(cljs.core.map_QMARK_(cljs.core.first(body)))
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else
{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__24584 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__24584__delegate.call(this,args);};
G__24584.cljs$lang$maxFixedArity = 0;
G__24584.cljs$lang$applyTo = (function (arglist__24585){
var args = cljs.core.seq(arglist__24585);
return G__24584__delegate(args);
});
G__24584.cljs$core$IFn$_invoke$arity$variadic = G__24584__delegate;
return G__24584;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__24590(s__24591){return (new cljs.core.LazySeq(null,(function (){var s__24591__$1 = s__24591;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24591__$1);if(temp__4092__auto__)
{var s__24591__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24591__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24591__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24593 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24592 = 0;while(true){
if((i__24592 < size__4116__auto__))
{var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24592);cljs.core.chunk_append(b__24593,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__24594 = (i__24592 + 1);
i__24592 = G__24594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24593),iter__24590(cljs.core.chunk_rest(s__24591__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24593),null);
}
} else
{var args = cljs.core.first(s__24591__$2);return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__24590(cljs.core.rest(s__24591__$2)));
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
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__24599(s__24600){return (new cljs.core.LazySeq(null,(function (){var s__24600__$1 = s__24600;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24600__$1);if(temp__4092__auto__)
{var s__24600__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24600__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24600__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24602 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24601 = 0;while(true){
if((i__24601 < size__4116__auto__))
{var script = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24601);cljs.core.chunk_append(b__24602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,"text/javascript",cljs.core.constant$keyword$140,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null));
{
var G__24603 = (i__24601 + 1);
i__24601 = G__24603;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24602),iter__24599(cljs.core.chunk_rest(s__24600__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24602),null);
}
} else
{var script = cljs.core.first(s__24600__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,"text/javascript",cljs.core.constant$keyword$140,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([script], 0))], null)], null),iter__24599(cljs.core.rest(s__24600__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__24604){
var scripts = cljs.core.seq(arglist__24604);
return include_js__delegate(scripts);
});
include_js.cljs$core$IFn$_invoke$arity$variadic = include_js__delegate;
return include_js;
})()
;
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__24609(s__24610){return (new cljs.core.LazySeq(null,(function (){var s__24610__$1 = s__24610;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24610__$1);if(temp__4092__auto__)
{var s__24610__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24610__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24610__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24612 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24611 = 0;while(true){
if((i__24611 < size__4116__auto__))
{var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24611);cljs.core.chunk_append(b__24612,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$139,"text/css",cljs.core.constant$keyword$142,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$143,"stylesheet"], null)], null));
{
var G__24613 = (i__24611 + 1);
i__24611 = G__24613;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24612),iter__24609(cljs.core.chunk_rest(s__24610__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24612),null);
}
} else
{var style = cljs.core.first(s__24610__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$141,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$139,"text/css",cljs.core.constant$keyword$142,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.constant$keyword$143,"stylesheet"], null)], null),iter__24609(cljs.core.rest(s__24610__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__24614){
var styles = cljs.core.seq(arglist__24614);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$139,"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to24615 = (function() { 
var link_to24615__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
};
var link_to24615 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to24615__delegate.call(this,url,content);};
link_to24615.cljs$lang$maxFixedArity = 1;
link_to24615.cljs$lang$applyTo = (function (arglist__24616){
var url = cljs.core.first(arglist__24616);
var content = cljs.core.rest(arglist__24616);
return link_to24615__delegate(url,content);
});
link_to24615.cljs$core$IFn$_invoke$arity$variadic = link_to24615__delegate;
return link_to24615;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to24615);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to24617 = (function() { 
var mail_to24617__delegate = function (e_mail,p__24618){var vec__24620 = p__24618;var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24620,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$144,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to24617 = function (e_mail,var_args){
var p__24618 = null;if (arguments.length > 1) {
  p__24618 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to24617__delegate.call(this,e_mail,p__24618);};
mail_to24617.cljs$lang$maxFixedArity = 1;
mail_to24617.cljs$lang$applyTo = (function (arglist__24621){
var e_mail = cljs.core.first(arglist__24621);
var p__24618 = cljs.core.rest(arglist__24621);
return mail_to24617__delegate(e_mail,p__24618);
});
mail_to24617.cljs$core$IFn$_invoke$arity$variadic = mail_to24617__delegate;
return mail_to24617;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to24617);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list24622 = (function unordered_list24622(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,(function (){var iter__4117__auto__ = (function iter__24627(s__24628){return (new cljs.core.LazySeq(null,(function (){var s__24628__$1 = s__24628;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24628__$1);if(temp__4092__auto__)
{var s__24628__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24628__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24628__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24630 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24629 = 0;while(true){
if((i__24629 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24629);cljs.core.chunk_append(b__24630,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,x], null));
{
var G__24631 = (i__24629 + 1);
i__24629 = G__24631;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24630),iter__24627(cljs.core.chunk_rest(s__24628__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24630),null);
}
} else
{var x = cljs.core.first(s__24628__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,x], null),iter__24627(cljs.core.rest(s__24628__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list24622);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list24632 = (function ordered_list24632(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$147,(function (){var iter__4117__auto__ = (function iter__24637(s__24638){return (new cljs.core.LazySeq(null,(function (){var s__24638__$1 = s__24638;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24638__$1);if(temp__4092__auto__)
{var s__24638__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24638__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24638__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24640 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24639 = 0;while(true){
if((i__24639 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24639);cljs.core.chunk_append(b__24640,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,x], null));
{
var G__24641 = (i__24639 + 1);
i__24639 = G__24641;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24640),iter__24637(cljs.core.chunk_rest(s__24638__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24640),null);
}
} else
{var x = cljs.core.first(s__24638__$2);return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$146,x], null),iter__24637(cljs.core.rest(s__24638__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list24632);
/**
* Create an image element.
*/
sablono.core.image24642 = (function() {
var image24642 = null;
var image24642__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$140,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});
var image24642__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$148,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$140,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.constant$keyword$149,alt], null)], null);
});
image24642 = function(src,alt){
switch(arguments.length){
case 1:
return image24642__1.call(this,src);
case 2:
return image24642__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image24642.cljs$core$IFn$_invoke$arity$1 = image24642__1;
image24642.cljs$core$IFn$_invoke$arity$2 = image24642__2;
return image24642;
})()
;
sablono.core.image = sablono.core.wrap_attrs(sablono.core.image24642);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24643_SHARP_,p2__24644_SHARP_){return [cljs.core.str(p1__24643_SHARP_),cljs.core.str("["),cljs.core.str(p2__24644_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__24645_SHARP_,p2__24646_SHARP_){return [cljs.core.str(p1__24645_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24646_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$139,type,cljs.core.constant$keyword$151,sablono.core.make_name(name),cljs.core.constant$keyword$137,sablono.core.make_id(name),cljs.core.constant$keyword$114,value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field24647 = (function() {
var hidden_field24647 = null;
var hidden_field24647__1 = (function (name){return hidden_field24647.cljs$core$IFn$_invoke$arity$2(name,null);
});
var hidden_field24647__2 = (function (name,value){return sablono.core.input_field("hidden",name,value);
});
hidden_field24647 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field24647__1.call(this,name);
case 2:
return hidden_field24647__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field24647.cljs$core$IFn$_invoke$arity$1 = hidden_field24647__1;
hidden_field24647.cljs$core$IFn$_invoke$arity$2 = hidden_field24647__2;
return hidden_field24647;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field24647);
/**
* Creates a new text input field.
*/
sablono.core.text_field24648 = (function() {
var text_field24648 = null;
var text_field24648__1 = (function (name){return text_field24648.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_field24648__2 = (function (name,value){return sablono.core.input_field("text",name,value);
});
text_field24648 = function(name,value){
switch(arguments.length){
case 1:
return text_field24648__1.call(this,name);
case 2:
return text_field24648__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field24648.cljs$core$IFn$_invoke$arity$1 = text_field24648__1;
text_field24648.cljs$core$IFn$_invoke$arity$2 = text_field24648__2;
return text_field24648;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field24648);
/**
* Creates a new password field.
*/
sablono.core.password_field24649 = (function() {
var password_field24649 = null;
var password_field24649__1 = (function (name){return password_field24649.cljs$core$IFn$_invoke$arity$2(name,null);
});
var password_field24649__2 = (function (name,value){return sablono.core.input_field("password",name,value);
});
password_field24649 = function(name,value){
switch(arguments.length){
case 1:
return password_field24649__1.call(this,name);
case 2:
return password_field24649__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field24649.cljs$core$IFn$_invoke$arity$1 = password_field24649__1;
password_field24649.cljs$core$IFn$_invoke$arity$2 = password_field24649__2;
return password_field24649;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field24649);
/**
* Creates a new email input field.
*/
sablono.core.email_field24650 = (function() {
var email_field24650 = null;
var email_field24650__1 = (function (name){return email_field24650.cljs$core$IFn$_invoke$arity$2(name,null);
});
var email_field24650__2 = (function (name,value){return sablono.core.input_field("email",name,value);
});
email_field24650 = function(name,value){
switch(arguments.length){
case 1:
return email_field24650__1.call(this,name);
case 2:
return email_field24650__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field24650.cljs$core$IFn$_invoke$arity$1 = email_field24650__1;
email_field24650.cljs$core$IFn$_invoke$arity$2 = email_field24650__2;
return email_field24650;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field24650);
/**
* Creates a check box.
*/
sablono.core.check_box24651 = (function() {
var check_box24651 = null;
var check_box24651__1 = (function (name){return check_box24651.cljs$core$IFn$_invoke$arity$2(name,null);
});
var check_box24651__2 = (function (name,checked_QMARK_){return check_box24651.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});
var check_box24651__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$139,"checkbox",cljs.core.constant$keyword$151,sablono.core.make_name(name),cljs.core.constant$keyword$137,sablono.core.make_id(name),cljs.core.constant$keyword$114,value,cljs.core.constant$keyword$152,checked_QMARK_], null)], null);
});
check_box24651 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box24651__1.call(this,name);
case 2:
return check_box24651__2.call(this,name,checked_QMARK_);
case 3:
return check_box24651__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box24651.cljs$core$IFn$_invoke$arity$1 = check_box24651__1;
check_box24651.cljs$core$IFn$_invoke$arity$2 = check_box24651__2;
check_box24651.cljs$core$IFn$_invoke$arity$3 = check_box24651__3;
return check_box24651;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box24651);
/**
* Creates a radio button.
*/
sablono.core.radio_button24652 = (function() {
var radio_button24652 = null;
var radio_button24652__1 = (function (group){return radio_button24652.cljs$core$IFn$_invoke$arity$2(group,null);
});
var radio_button24652__2 = (function (group,checked_QMARK_){return radio_button24652.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});
var radio_button24652__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$139,"radio",cljs.core.constant$keyword$151,sablono.core.make_name(group),cljs.core.constant$keyword$137,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.constant$keyword$114,value,cljs.core.constant$keyword$152,checked_QMARK_], null)], null);
});
radio_button24652 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button24652__1.call(this,group);
case 2:
return radio_button24652__2.call(this,group,checked_QMARK_);
case 3:
return radio_button24652__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button24652.cljs$core$IFn$_invoke$arity$1 = radio_button24652__1;
radio_button24652.cljs$core$IFn$_invoke$arity$2 = radio_button24652__2;
radio_button24652.cljs$core$IFn$_invoke$arity$3 = radio_button24652__3;
return radio_button24652;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button24652);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options24653 = (function() {
var select_options24653 = null;
var select_options24653__1 = (function (coll){return select_options24653.cljs$core$IFn$_invoke$arity$2(coll,null);
});
var select_options24653__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__24662(s__24663){return (new cljs.core.LazySeq(null,(function (){var s__24663__$1 = s__24663;while(true){
var temp__4092__auto__ = cljs.core.seq(s__24663__$1);if(temp__4092__auto__)
{var s__24663__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__24663__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__24663__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__24665 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__24664 = 0;while(true){
if((i__24664 < size__4116__auto__))
{var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__24664);cljs.core.chunk_append(b__24665,((cljs.core.sequential_QMARK_(x))?(function (){var vec__24668 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24668,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24668,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$154,text], null),select_options24653.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$114,val,cljs.core.constant$keyword$156,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$156,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));
{
var G__24670 = (i__24664 + 1);
i__24664 = G__24670;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__24665),iter__24662(cljs.core.chunk_rest(s__24663__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__24665),null);
}
} else
{var x = cljs.core.first(s__24663__$2);return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__24669 = x;var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24669,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24669,1,null);if(cljs.core.sequential_QMARK_(val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$154,text], null),select_options24653.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$114,val,cljs.core.constant$keyword$156,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$155,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$156,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),iter__24662(cljs.core.rest(s__24663__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(coll);
});
select_options24653 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options24653__1.call(this,coll);
case 2:
return select_options24653__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options24653.cljs$core$IFn$_invoke$arity$1 = select_options24653__1;
select_options24653.cljs$core$IFn$_invoke$arity$2 = select_options24653__2;
return select_options24653;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options24653);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down24671 = (function() {
var drop_down24671 = null;
var drop_down24671__2 = (function (name,options){return drop_down24671.cljs$core$IFn$_invoke$arity$3(name,options,null);
});
var drop_down24671__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$157,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,sablono.core.make_name(name),cljs.core.constant$keyword$137,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});
drop_down24671 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down24671__2.call(this,name,options);
case 3:
return drop_down24671__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down24671.cljs$core$IFn$_invoke$arity$2 = drop_down24671__2;
drop_down24671.cljs$core$IFn$_invoke$arity$3 = drop_down24671__3;
return drop_down24671;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down24671);
/**
* Creates a text area element.
*/
sablono.core.text_area24672 = (function() {
var text_area24672 = null;
var text_area24672__1 = (function (name){return text_area24672.cljs$core$IFn$_invoke$arity$2(name,null);
});
var text_area24672__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$158,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$151,sablono.core.make_name(name),cljs.core.constant$keyword$137,sablono.core.make_id(name)], null),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0))], null);
});
text_area24672 = function(name,value){
switch(arguments.length){
case 1:
return text_area24672__1.call(this,name);
case 2:
return text_area24672__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area24672.cljs$core$IFn$_invoke$arity$1 = text_area24672__1;
text_area24672.cljs$core$IFn$_invoke$arity$2 = text_area24672__2;
return text_area24672;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area24672);
/**
* Creates a file upload input.
*/
sablono.core.file_upload24673 = (function file_upload24673(name){return sablono.core.input_field("file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs(sablono.core.file_upload24673);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label24674 = (function label24674(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$154,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$159,sablono.core.make_id(name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs(sablono.core.label24674);
/**
* Creates a submit button.
*/
sablono.core.submit_button24675 = (function submit_button24675(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,"submit",cljs.core.constant$keyword$114,text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button24675);
/**
* Creates a form reset button.
*/
sablono.core.reset_button24676 = (function reset_button24676(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$150,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$139,"reset",cljs.core.constant$keyword$114,text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button24676);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to24677 = (function() { 
var form_to24677__delegate = function (p__24678,body){var vec__24680 = p__24678;var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24680,0,null);var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24680,1,null);var method_str = clojure.string.upper_case(cljs.core.name(method));var action_uri = sablono.util.to_uri(action);return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$160,null,cljs.core.constant$keyword$161,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$162,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,method_str,cljs.core.constant$keyword$164,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$162,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$163,"POST",cljs.core.constant$keyword$164,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
};
var form_to24677 = function (p__24678,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to24677__delegate.call(this,p__24678,body);};
form_to24677.cljs$lang$maxFixedArity = 1;
form_to24677.cljs$lang$applyTo = (function (arglist__24681){
var p__24678 = cljs.core.first(arglist__24681);
var body = cljs.core.rest(arglist__24681);
return form_to24677__delegate(p__24678,body);
});
form_to24677.cljs$core$IFn$_invoke$arity$variadic = form_to24677__delegate;
return form_to24677;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to24677);
