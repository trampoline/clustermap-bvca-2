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
var G__33552__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__33551 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__33551,0,null);var body = cljs.core.nthnext.call(null,vec__33551,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__33552 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__33552__delegate.call(this,args);};
G__33552.cljs$lang$maxFixedArity = 0;
G__33552.cljs$lang$applyTo = (function (arglist__33553){
var args = cljs.core.seq(arglist__33553);
return G__33552__delegate(args);
});
G__33552.cljs$core$IFn$_invoke$arity$variadic = G__33552__delegate;
return G__33552;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4117__auto__ = (function iter__33558(s__33559){return (new cljs.core.LazySeq(null,(function (){var s__33559__$1 = s__33559;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33559__$1);if(temp__4092__auto__)
{var s__33559__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33559__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33559__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33561 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33560 = 0;while(true){
if((i__33560 < size__4116__auto__))
{var args = cljs.core._nth.call(null,c__4115__auto__,i__33560);cljs.core.chunk_append.call(null,b__33561,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__33562 = (i__33560 + 1);
i__33560 = G__33562;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33561),iter__33558.call(null,cljs.core.chunk_rest.call(null,s__33559__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33561),null);
}
} else
{var args = cljs.core.first.call(null,s__33559__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__33558.call(null,cljs.core.rest.call(null,s__33559__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,arglists);
});
/**
* Include a list of external javascript files.
* @param {...*} var_args
*/
sablono.core.include_js = (function() { 
var include_js__delegate = function (scripts){var iter__4117__auto__ = (function iter__33567(s__33568){return (new cljs.core.LazySeq(null,(function (){var s__33568__$1 = s__33568;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33568__$1);if(temp__4092__auto__)
{var s__33568__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33568__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33568__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33570 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33569 = 0;while(true){
if((i__33569 < size__4116__auto__))
{var script = cljs.core._nth.call(null,c__4115__auto__,i__33569);cljs.core.chunk_append.call(null,b__33570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null));
{
var G__33571 = (i__33569 + 1);
i__33569 = G__33571;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33570),iter__33567.call(null,cljs.core.chunk_rest.call(null,s__33568__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33570),null);
}
} else
{var script = cljs.core.first.call(null,s__33568__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript",new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,script)], null)], null),iter__33567.call(null,cljs.core.rest.call(null,s__33568__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,scripts);
};
var include_js = function (var_args){
var scripts = null;if (arguments.length > 0) {
  scripts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_js__delegate.call(this,scripts);};
include_js.cljs$lang$maxFixedArity = 0;
include_js.cljs$lang$applyTo = (function (arglist__33572){
var scripts = cljs.core.seq(arglist__33572);
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
var include_css__delegate = function (styles){var iter__4117__auto__ = (function iter__33577(s__33578){return (new cljs.core.LazySeq(null,(function (){var s__33578__$1 = s__33578;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33578__$1);if(temp__4092__auto__)
{var s__33578__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33578__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33578__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33580 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33579 = 0;while(true){
if((i__33579 < size__4116__auto__))
{var style = cljs.core._nth.call(null,c__4115__auto__,i__33579);cljs.core.chunk_append.call(null,b__33580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__33581 = (i__33579 + 1);
i__33579 = G__33581;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33580),iter__33577.call(null,cljs.core.chunk_rest.call(null,s__33578__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33580),null);
}
} else
{var style = cljs.core.first.call(null,s__33578__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__33577.call(null,cljs.core.rest.call(null,s__33578__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__33582){
var styles = cljs.core.seq(arglist__33582);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Wrap the supplied javascript up in script tags and a CDATA section.
*/
sablono.core.javascript_tag = (function javascript_tag(script){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null),[cljs.core.str("//<![CDATA[\n"),cljs.core.str(script),cljs.core.str("\n//]]>")].join('')], null);
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to33583 = (function() { 
var link_to33583__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to33583 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to33583__delegate.call(this,url,content);};
link_to33583.cljs$lang$maxFixedArity = 1;
link_to33583.cljs$lang$applyTo = (function (arglist__33584){
var url = cljs.core.first(arglist__33584);
var content = cljs.core.rest(arglist__33584);
return link_to33583__delegate(url,content);
});
link_to33583.cljs$core$IFn$_invoke$arity$variadic = link_to33583__delegate;
return link_to33583;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to33583);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to33585 = (function() { 
var mail_to33585__delegate = function (e_mail,p__33586){var vec__33588 = p__33586;var content = cljs.core.nth.call(null,vec__33588,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3406__auto__ = content;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to33585 = function (e_mail,var_args){
var p__33586 = null;if (arguments.length > 1) {
  p__33586 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to33585__delegate.call(this,e_mail,p__33586);};
mail_to33585.cljs$lang$maxFixedArity = 1;
mail_to33585.cljs$lang$applyTo = (function (arglist__33589){
var e_mail = cljs.core.first(arglist__33589);
var p__33586 = cljs.core.rest(arglist__33589);
return mail_to33585__delegate(e_mail,p__33586);
});
mail_to33585.cljs$core$IFn$_invoke$arity$variadic = mail_to33585__delegate;
return mail_to33585;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to33585);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list33590 = (function unordered_list33590(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4117__auto__ = (function iter__33595(s__33596){return (new cljs.core.LazySeq(null,(function (){var s__33596__$1 = s__33596;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33596__$1);if(temp__4092__auto__)
{var s__33596__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33596__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33596__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33598 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33597 = 0;while(true){
if((i__33597 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33597);cljs.core.chunk_append.call(null,b__33598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33599 = (i__33597 + 1);
i__33597 = G__33599;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33598),iter__33595.call(null,cljs.core.chunk_rest.call(null,s__33596__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33598),null);
}
} else
{var x = cljs.core.first.call(null,s__33596__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33595.call(null,cljs.core.rest.call(null,s__33596__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list33590);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list33600 = (function ordered_list33600(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4117__auto__ = (function iter__33605(s__33606){return (new cljs.core.LazySeq(null,(function (){var s__33606__$1 = s__33606;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33606__$1);if(temp__4092__auto__)
{var s__33606__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33606__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33606__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33608 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33607 = 0;while(true){
if((i__33607 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33607);cljs.core.chunk_append.call(null,b__33608,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__33609 = (i__33607 + 1);
i__33607 = G__33609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33608),iter__33605.call(null,cljs.core.chunk_rest.call(null,s__33606__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33608),null);
}
} else
{var x = cljs.core.first.call(null,s__33606__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__33605.call(null,cljs.core.rest.call(null,s__33606__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list33600);
/**
* Create an image element.
*/
sablono.core.image33610 = (function() {
var image33610 = null;
var image33610__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image33610__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image33610 = function(src,alt){
switch(arguments.length){
case 1:
return image33610__1.call(this,src);
case 2:
return image33610__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image33610.cljs$core$IFn$_invoke$arity$1 = image33610__1;
image33610.cljs$core$IFn$_invoke$arity$2 = image33610__2;
return image33610;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image33610);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__33611_SHARP_,p2__33612_SHARP_){return [cljs.core.str(p1__33611_SHARP_),cljs.core.str("["),cljs.core.str(p2__33612_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__33613_SHARP_,p2__33614_SHARP_){return [cljs.core.str(p1__33613_SHARP_),cljs.core.str("-"),cljs.core.str(p2__33614_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field33615 = (function() {
var hidden_field33615 = null;
var hidden_field33615__1 = (function (name){return hidden_field33615.call(null,name,null);
});
var hidden_field33615__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field33615 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field33615__1.call(this,name);
case 2:
return hidden_field33615__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field33615.cljs$core$IFn$_invoke$arity$1 = hidden_field33615__1;
hidden_field33615.cljs$core$IFn$_invoke$arity$2 = hidden_field33615__2;
return hidden_field33615;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field33615);
/**
* Creates a new text input field.
*/
sablono.core.text_field33616 = (function() {
var text_field33616 = null;
var text_field33616__1 = (function (name){return text_field33616.call(null,name,null);
});
var text_field33616__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field33616 = function(name,value){
switch(arguments.length){
case 1:
return text_field33616__1.call(this,name);
case 2:
return text_field33616__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field33616.cljs$core$IFn$_invoke$arity$1 = text_field33616__1;
text_field33616.cljs$core$IFn$_invoke$arity$2 = text_field33616__2;
return text_field33616;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field33616);
/**
* Creates a new password field.
*/
sablono.core.password_field33617 = (function() {
var password_field33617 = null;
var password_field33617__1 = (function (name){return password_field33617.call(null,name,null);
});
var password_field33617__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field33617 = function(name,value){
switch(arguments.length){
case 1:
return password_field33617__1.call(this,name);
case 2:
return password_field33617__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field33617.cljs$core$IFn$_invoke$arity$1 = password_field33617__1;
password_field33617.cljs$core$IFn$_invoke$arity$2 = password_field33617__2;
return password_field33617;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field33617);
/**
* Creates a new email input field.
*/
sablono.core.email_field33618 = (function() {
var email_field33618 = null;
var email_field33618__1 = (function (name){return email_field33618.call(null,name,null);
});
var email_field33618__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field33618 = function(name,value){
switch(arguments.length){
case 1:
return email_field33618__1.call(this,name);
case 2:
return email_field33618__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field33618.cljs$core$IFn$_invoke$arity$1 = email_field33618__1;
email_field33618.cljs$core$IFn$_invoke$arity$2 = email_field33618__2;
return email_field33618;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field33618);
/**
* Creates a check box.
*/
sablono.core.check_box33619 = (function() {
var check_box33619 = null;
var check_box33619__1 = (function (name){return check_box33619.call(null,name,null);
});
var check_box33619__2 = (function (name,checked_QMARK_){return check_box33619.call(null,name,checked_QMARK_,"true");
});
var check_box33619__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box33619 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box33619__1.call(this,name);
case 2:
return check_box33619__2.call(this,name,checked_QMARK_);
case 3:
return check_box33619__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box33619.cljs$core$IFn$_invoke$arity$1 = check_box33619__1;
check_box33619.cljs$core$IFn$_invoke$arity$2 = check_box33619__2;
check_box33619.cljs$core$IFn$_invoke$arity$3 = check_box33619__3;
return check_box33619;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box33619);
/**
* Creates a radio button.
*/
sablono.core.radio_button33620 = (function() {
var radio_button33620 = null;
var radio_button33620__1 = (function (group){return radio_button33620.call(null,group,null);
});
var radio_button33620__2 = (function (group,checked_QMARK_){return radio_button33620.call(null,group,checked_QMARK_,"true");
});
var radio_button33620__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button33620 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button33620__1.call(this,group);
case 2:
return radio_button33620__2.call(this,group,checked_QMARK_);
case 3:
return radio_button33620__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button33620.cljs$core$IFn$_invoke$arity$1 = radio_button33620__1;
radio_button33620.cljs$core$IFn$_invoke$arity$2 = radio_button33620__2;
radio_button33620.cljs$core$IFn$_invoke$arity$3 = radio_button33620__3;
return radio_button33620;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button33620);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options33621 = (function() {
var select_options33621 = null;
var select_options33621__1 = (function (coll){return select_options33621.call(null,coll,null);
});
var select_options33621__2 = (function (coll,selected){var iter__4117__auto__ = (function iter__33630(s__33631){return (new cljs.core.LazySeq(null,(function (){var s__33631__$1 = s__33631;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33631__$1);if(temp__4092__auto__)
{var s__33631__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33631__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33631__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33633 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33632 = 0;while(true){
if((i__33632 < size__4116__auto__))
{var x = cljs.core._nth.call(null,c__4115__auto__,i__33632);cljs.core.chunk_append.call(null,b__33633,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33636 = x;var text = cljs.core.nth.call(null,vec__33636,0,null);var val = cljs.core.nth.call(null,vec__33636,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33621.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__33638 = (i__33632 + 1);
i__33632 = G__33638;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33633),iter__33630.call(null,cljs.core.chunk_rest.call(null,s__33631__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33633),null);
}
} else
{var x = cljs.core.first.call(null,s__33631__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__33637 = x;var text = cljs.core.nth.call(null,vec__33637,0,null);var val = cljs.core.nth.call(null,vec__33637,1,null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options33621.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__33630.call(null,cljs.core.rest.call(null,s__33631__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,coll);
});
select_options33621 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options33621__1.call(this,coll);
case 2:
return select_options33621__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options33621.cljs$core$IFn$_invoke$arity$1 = select_options33621__1;
select_options33621.cljs$core$IFn$_invoke$arity$2 = select_options33621__2;
return select_options33621;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options33621);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down33639 = (function() {
var drop_down33639 = null;
var drop_down33639__2 = (function (name,options){return drop_down33639.call(null,name,options,null);
});
var drop_down33639__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down33639 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down33639__2.call(this,name,options);
case 3:
return drop_down33639__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down33639.cljs$core$IFn$_invoke$arity$2 = drop_down33639__2;
drop_down33639.cljs$core$IFn$_invoke$arity$3 = drop_down33639__3;
return drop_down33639;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down33639);
/**
* Creates a text area element.
*/
sablono.core.text_area33640 = (function() {
var text_area33640 = null;
var text_area33640__1 = (function (name){return text_area33640.call(null,name,null);
});
var text_area33640__2 = (function (name,value){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.util.as_str.call(null,value)], null);
});
text_area33640 = function(name,value){
switch(arguments.length){
case 1:
return text_area33640__1.call(this,name);
case 2:
return text_area33640__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area33640.cljs$core$IFn$_invoke$arity$1 = text_area33640__1;
text_area33640.cljs$core$IFn$_invoke$arity$2 = text_area33640__2;
return text_area33640;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area33640);
/**
* Creates a file upload input.
*/
sablono.core.file_upload33641 = (function file_upload33641(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload33641);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label33642 = (function label33642(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label33642);
/**
* Creates a submit button.
*/
sablono.core.submit_button33643 = (function submit_button33643(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button33643);
/**
* Creates a form reset button.
*/
sablono.core.reset_button33644 = (function reset_button33644(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button33644);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to33645 = (function() { 
var form_to33645__delegate = function (p__33646,body){var vec__33648 = p__33646;var method = cljs.core.nth.call(null,vec__33648,0,null);var action = cljs.core.nth.call(null,vec__33648,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to33645 = function (p__33646,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to33645__delegate.call(this,p__33646,body);};
form_to33645.cljs$lang$maxFixedArity = 1;
form_to33645.cljs$lang$applyTo = (function (arglist__33649){
var p__33646 = cljs.core.first(arglist__33649);
var body = cljs.core.rest(arglist__33649);
return form_to33645__delegate(p__33646,body);
});
form_to33645.cljs$core$IFn$_invoke$arity$variadic = form_to33645__delegate;
return form_to33645;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to33645);
