// Compiled by ClojureScript 0.0-2322
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
var G__63792__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__63791 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__63791,(0),null);var body = cljs.core.nthnext.call(null,vec__63791,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__63792 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__63792__delegate.call(this,args);};
G__63792.cljs$lang$maxFixedArity = 0;
G__63792.cljs$lang$applyTo = (function (arglist__63793){
var args = cljs.core.seq(arglist__63793);
return G__63792__delegate(args);
});
G__63792.cljs$core$IFn$_invoke$arity$variadic = G__63792__delegate;
return G__63792;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__63798(s__63799){return (new cljs.core.LazySeq(null,(function (){var s__63799__$1 = s__63799;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__63799__$1);if(temp__4126__auto__)
{var s__63799__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__63799__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__63799__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__63801 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__63800 = (0);while(true){
if((i__63800 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__63800);cljs.core.chunk_append.call(null,b__63801,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__63802 = (i__63800 + (1));
i__63800 = G__63802;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63801),iter__63798.call(null,cljs.core.chunk_rest.call(null,s__63799__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63801),null);
}
} else
{var args = cljs.core.first.call(null,s__63799__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__63798.call(null,cljs.core.rest.call(null,s__63799__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__63807(s__63808){return (new cljs.core.LazySeq(null,(function (){var s__63808__$1 = s__63808;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__63808__$1);if(temp__4126__auto__)
{var s__63808__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__63808__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__63808__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__63810 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__63809 = (0);while(true){
if((i__63809 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__63809);cljs.core.chunk_append.call(null,b__63810,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__63811 = (i__63809 + (1));
i__63809 = G__63811;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63810),iter__63807.call(null,cljs.core.chunk_rest.call(null,s__63808__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63810),null);
}
} else
{var style = cljs.core.first.call(null,s__63808__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__63807.call(null,cljs.core.rest.call(null,s__63808__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__63812){
var styles = cljs.core.seq(arglist__63812);
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
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to63813 = (function() { 
var link_to63813__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to63813 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to63813__delegate.call(this,url,content);};
link_to63813.cljs$lang$maxFixedArity = 1;
link_to63813.cljs$lang$applyTo = (function (arglist__63814){
var url = cljs.core.first(arglist__63814);
var content = cljs.core.rest(arglist__63814);
return link_to63813__delegate(url,content);
});
link_to63813.cljs$core$IFn$_invoke$arity$variadic = link_to63813__delegate;
return link_to63813;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to63813);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to63815 = (function() { 
var mail_to63815__delegate = function (e_mail,p__63816){var vec__63818 = p__63816;var content = cljs.core.nth.call(null,vec__63818,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to63815 = function (e_mail,var_args){
var p__63816 = null;if (arguments.length > 1) {
  p__63816 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to63815__delegate.call(this,e_mail,p__63816);};
mail_to63815.cljs$lang$maxFixedArity = 1;
mail_to63815.cljs$lang$applyTo = (function (arglist__63819){
var e_mail = cljs.core.first(arglist__63819);
var p__63816 = cljs.core.rest(arglist__63819);
return mail_to63815__delegate(e_mail,p__63816);
});
mail_to63815.cljs$core$IFn$_invoke$arity$variadic = mail_to63815__delegate;
return mail_to63815;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to63815);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list63820 = (function unordered_list63820(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__63825(s__63826){return (new cljs.core.LazySeq(null,(function (){var s__63826__$1 = s__63826;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__63826__$1);if(temp__4126__auto__)
{var s__63826__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__63826__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__63826__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__63828 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__63827 = (0);while(true){
if((i__63827 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__63827);cljs.core.chunk_append.call(null,b__63828,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__63829 = (i__63827 + (1));
i__63827 = G__63829;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63828),iter__63825.call(null,cljs.core.chunk_rest.call(null,s__63826__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63828),null);
}
} else
{var x = cljs.core.first.call(null,s__63826__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__63825.call(null,cljs.core.rest.call(null,s__63826__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list63820);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list63830 = (function ordered_list63830(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__63835(s__63836){return (new cljs.core.LazySeq(null,(function (){var s__63836__$1 = s__63836;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__63836__$1);if(temp__4126__auto__)
{var s__63836__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__63836__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__63836__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__63838 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__63837 = (0);while(true){
if((i__63837 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__63837);cljs.core.chunk_append.call(null,b__63838,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__63839 = (i__63837 + (1));
i__63837 = G__63839;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63838),iter__63835.call(null,cljs.core.chunk_rest.call(null,s__63836__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63838),null);
}
} else
{var x = cljs.core.first.call(null,s__63836__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__63835.call(null,cljs.core.rest.call(null,s__63836__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list63830);
/**
* Create an image element.
*/
sablono.core.image63840 = (function() {
var image63840 = null;
var image63840__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image63840__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image63840 = function(src,alt){
switch(arguments.length){
case 1:
return image63840__1.call(this,src);
case 2:
return image63840__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image63840.cljs$core$IFn$_invoke$arity$1 = image63840__1;
image63840.cljs$core$IFn$_invoke$arity$2 = image63840__2;
return image63840;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image63840);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__63841_SHARP_,p2__63842_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63841_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__63842_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__63843_SHARP_,p2__63844_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__63843_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__63844_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field63845 = (function() {
var color_field63845 = null;
var color_field63845__1 = (function (name__10441__auto__){return color_field63845.call(null,name__10441__auto__,null);
});
var color_field63845__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10441__auto__,value__10442__auto__);
});
color_field63845 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return color_field63845__1.call(this,name__10441__auto__);
case 2:
return color_field63845__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field63845.cljs$core$IFn$_invoke$arity$1 = color_field63845__1;
color_field63845.cljs$core$IFn$_invoke$arity$2 = color_field63845__2;
return color_field63845;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field63845);
/**
* Creates a date input field.
*/
sablono.core.date_field63846 = (function() {
var date_field63846 = null;
var date_field63846__1 = (function (name__10441__auto__){return date_field63846.call(null,name__10441__auto__,null);
});
var date_field63846__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10441__auto__,value__10442__auto__);
});
date_field63846 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return date_field63846__1.call(this,name__10441__auto__);
case 2:
return date_field63846__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field63846.cljs$core$IFn$_invoke$arity$1 = date_field63846__1;
date_field63846.cljs$core$IFn$_invoke$arity$2 = date_field63846__2;
return date_field63846;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field63846);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field63847 = (function() {
var datetime_field63847 = null;
var datetime_field63847__1 = (function (name__10441__auto__){return datetime_field63847.call(null,name__10441__auto__,null);
});
var datetime_field63847__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10441__auto__,value__10442__auto__);
});
datetime_field63847 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_field63847__1.call(this,name__10441__auto__);
case 2:
return datetime_field63847__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field63847.cljs$core$IFn$_invoke$arity$1 = datetime_field63847__1;
datetime_field63847.cljs$core$IFn$_invoke$arity$2 = datetime_field63847__2;
return datetime_field63847;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field63847);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field63848 = (function() {
var datetime_local_field63848 = null;
var datetime_local_field63848__1 = (function (name__10441__auto__){return datetime_local_field63848.call(null,name__10441__auto__,null);
});
var datetime_local_field63848__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10441__auto__,value__10442__auto__);
});
datetime_local_field63848 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_local_field63848__1.call(this,name__10441__auto__);
case 2:
return datetime_local_field63848__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field63848.cljs$core$IFn$_invoke$arity$1 = datetime_local_field63848__1;
datetime_local_field63848.cljs$core$IFn$_invoke$arity$2 = datetime_local_field63848__2;
return datetime_local_field63848;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field63848);
/**
* Creates a email input field.
*/
sablono.core.email_field63849 = (function() {
var email_field63849 = null;
var email_field63849__1 = (function (name__10441__auto__){return email_field63849.call(null,name__10441__auto__,null);
});
var email_field63849__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10441__auto__,value__10442__auto__);
});
email_field63849 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return email_field63849__1.call(this,name__10441__auto__);
case 2:
return email_field63849__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field63849.cljs$core$IFn$_invoke$arity$1 = email_field63849__1;
email_field63849.cljs$core$IFn$_invoke$arity$2 = email_field63849__2;
return email_field63849;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field63849);
/**
* Creates a file input field.
*/
sablono.core.file_field63850 = (function() {
var file_field63850 = null;
var file_field63850__1 = (function (name__10441__auto__){return file_field63850.call(null,name__10441__auto__,null);
});
var file_field63850__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10441__auto__,value__10442__auto__);
});
file_field63850 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return file_field63850__1.call(this,name__10441__auto__);
case 2:
return file_field63850__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field63850.cljs$core$IFn$_invoke$arity$1 = file_field63850__1;
file_field63850.cljs$core$IFn$_invoke$arity$2 = file_field63850__2;
return file_field63850;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field63850);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field63851 = (function() {
var hidden_field63851 = null;
var hidden_field63851__1 = (function (name__10441__auto__){return hidden_field63851.call(null,name__10441__auto__,null);
});
var hidden_field63851__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10441__auto__,value__10442__auto__);
});
hidden_field63851 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return hidden_field63851__1.call(this,name__10441__auto__);
case 2:
return hidden_field63851__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field63851.cljs$core$IFn$_invoke$arity$1 = hidden_field63851__1;
hidden_field63851.cljs$core$IFn$_invoke$arity$2 = hidden_field63851__2;
return hidden_field63851;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field63851);
/**
* Creates a month input field.
*/
sablono.core.month_field63852 = (function() {
var month_field63852 = null;
var month_field63852__1 = (function (name__10441__auto__){return month_field63852.call(null,name__10441__auto__,null);
});
var month_field63852__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10441__auto__,value__10442__auto__);
});
month_field63852 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return month_field63852__1.call(this,name__10441__auto__);
case 2:
return month_field63852__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field63852.cljs$core$IFn$_invoke$arity$1 = month_field63852__1;
month_field63852.cljs$core$IFn$_invoke$arity$2 = month_field63852__2;
return month_field63852;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field63852);
/**
* Creates a number input field.
*/
sablono.core.number_field63853 = (function() {
var number_field63853 = null;
var number_field63853__1 = (function (name__10441__auto__){return number_field63853.call(null,name__10441__auto__,null);
});
var number_field63853__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10441__auto__,value__10442__auto__);
});
number_field63853 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return number_field63853__1.call(this,name__10441__auto__);
case 2:
return number_field63853__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field63853.cljs$core$IFn$_invoke$arity$1 = number_field63853__1;
number_field63853.cljs$core$IFn$_invoke$arity$2 = number_field63853__2;
return number_field63853;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field63853);
/**
* Creates a password input field.
*/
sablono.core.password_field63854 = (function() {
var password_field63854 = null;
var password_field63854__1 = (function (name__10441__auto__){return password_field63854.call(null,name__10441__auto__,null);
});
var password_field63854__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10441__auto__,value__10442__auto__);
});
password_field63854 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return password_field63854__1.call(this,name__10441__auto__);
case 2:
return password_field63854__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field63854.cljs$core$IFn$_invoke$arity$1 = password_field63854__1;
password_field63854.cljs$core$IFn$_invoke$arity$2 = password_field63854__2;
return password_field63854;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field63854);
/**
* Creates a range input field.
*/
sablono.core.range_field63855 = (function() {
var range_field63855 = null;
var range_field63855__1 = (function (name__10441__auto__){return range_field63855.call(null,name__10441__auto__,null);
});
var range_field63855__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10441__auto__,value__10442__auto__);
});
range_field63855 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return range_field63855__1.call(this,name__10441__auto__);
case 2:
return range_field63855__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field63855.cljs$core$IFn$_invoke$arity$1 = range_field63855__1;
range_field63855.cljs$core$IFn$_invoke$arity$2 = range_field63855__2;
return range_field63855;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field63855);
/**
* Creates a search input field.
*/
sablono.core.search_field63856 = (function() {
var search_field63856 = null;
var search_field63856__1 = (function (name__10441__auto__){return search_field63856.call(null,name__10441__auto__,null);
});
var search_field63856__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10441__auto__,value__10442__auto__);
});
search_field63856 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return search_field63856__1.call(this,name__10441__auto__);
case 2:
return search_field63856__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field63856.cljs$core$IFn$_invoke$arity$1 = search_field63856__1;
search_field63856.cljs$core$IFn$_invoke$arity$2 = search_field63856__2;
return search_field63856;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field63856);
/**
* Creates a tel input field.
*/
sablono.core.tel_field63857 = (function() {
var tel_field63857 = null;
var tel_field63857__1 = (function (name__10441__auto__){return tel_field63857.call(null,name__10441__auto__,null);
});
var tel_field63857__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10441__auto__,value__10442__auto__);
});
tel_field63857 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return tel_field63857__1.call(this,name__10441__auto__);
case 2:
return tel_field63857__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field63857.cljs$core$IFn$_invoke$arity$1 = tel_field63857__1;
tel_field63857.cljs$core$IFn$_invoke$arity$2 = tel_field63857__2;
return tel_field63857;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field63857);
/**
* Creates a text input field.
*/
sablono.core.text_field63858 = (function() {
var text_field63858 = null;
var text_field63858__1 = (function (name__10441__auto__){return text_field63858.call(null,name__10441__auto__,null);
});
var text_field63858__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10441__auto__,value__10442__auto__);
});
text_field63858 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return text_field63858__1.call(this,name__10441__auto__);
case 2:
return text_field63858__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field63858.cljs$core$IFn$_invoke$arity$1 = text_field63858__1;
text_field63858.cljs$core$IFn$_invoke$arity$2 = text_field63858__2;
return text_field63858;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field63858);
/**
* Creates a time input field.
*/
sablono.core.time_field63859 = (function() {
var time_field63859 = null;
var time_field63859__1 = (function (name__10441__auto__){return time_field63859.call(null,name__10441__auto__,null);
});
var time_field63859__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10441__auto__,value__10442__auto__);
});
time_field63859 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return time_field63859__1.call(this,name__10441__auto__);
case 2:
return time_field63859__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field63859.cljs$core$IFn$_invoke$arity$1 = time_field63859__1;
time_field63859.cljs$core$IFn$_invoke$arity$2 = time_field63859__2;
return time_field63859;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field63859);
/**
* Creates a url input field.
*/
sablono.core.url_field63860 = (function() {
var url_field63860 = null;
var url_field63860__1 = (function (name__10441__auto__){return url_field63860.call(null,name__10441__auto__,null);
});
var url_field63860__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10441__auto__,value__10442__auto__);
});
url_field63860 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return url_field63860__1.call(this,name__10441__auto__);
case 2:
return url_field63860__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field63860.cljs$core$IFn$_invoke$arity$1 = url_field63860__1;
url_field63860.cljs$core$IFn$_invoke$arity$2 = url_field63860__2;
return url_field63860;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field63860);
/**
* Creates a week input field.
*/
sablono.core.week_field63861 = (function() {
var week_field63861 = null;
var week_field63861__1 = (function (name__10441__auto__){return week_field63861.call(null,name__10441__auto__,null);
});
var week_field63861__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10441__auto__,value__10442__auto__);
});
week_field63861 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return week_field63861__1.call(this,name__10441__auto__);
case 2:
return week_field63861__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field63861.cljs$core$IFn$_invoke$arity$1 = week_field63861__1;
week_field63861.cljs$core$IFn$_invoke$arity$2 = week_field63861__2;
return week_field63861;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field63861);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box63862 = (function() {
var check_box63862 = null;
var check_box63862__1 = (function (name){return check_box63862.call(null,name,null);
});
var check_box63862__2 = (function (name,checked_QMARK_){return check_box63862.call(null,name,checked_QMARK_,"true");
});
var check_box63862__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box63862 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box63862__1.call(this,name);
case 2:
return check_box63862__2.call(this,name,checked_QMARK_);
case 3:
return check_box63862__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box63862.cljs$core$IFn$_invoke$arity$1 = check_box63862__1;
check_box63862.cljs$core$IFn$_invoke$arity$2 = check_box63862__2;
check_box63862.cljs$core$IFn$_invoke$arity$3 = check_box63862__3;
return check_box63862;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box63862);
/**
* Creates a radio button.
*/
sablono.core.radio_button63863 = (function() {
var radio_button63863 = null;
var radio_button63863__1 = (function (group){return radio_button63863.call(null,group,null);
});
var radio_button63863__2 = (function (group,checked_QMARK_){return radio_button63863.call(null,group,checked_QMARK_,"true");
});
var radio_button63863__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button63863 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button63863__1.call(this,group);
case 2:
return radio_button63863__2.call(this,group,checked_QMARK_);
case 3:
return radio_button63863__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button63863.cljs$core$IFn$_invoke$arity$1 = radio_button63863__1;
radio_button63863.cljs$core$IFn$_invoke$arity$2 = radio_button63863__2;
radio_button63863.cljs$core$IFn$_invoke$arity$3 = radio_button63863__3;
return radio_button63863;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button63863);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options63864 = (function() {
var select_options63864 = null;
var select_options63864__1 = (function (coll){return select_options63864.call(null,coll,null);
});
var select_options63864__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__63873(s__63874){return (new cljs.core.LazySeq(null,(function (){var s__63874__$1 = s__63874;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__63874__$1);if(temp__4126__auto__)
{var s__63874__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__63874__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__63874__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__63876 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__63875 = (0);while(true){
if((i__63875 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__63875);cljs.core.chunk_append.call(null,b__63876,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__63879 = x;var text = cljs.core.nth.call(null,vec__63879,(0),null);var val = cljs.core.nth.call(null,vec__63879,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__63879,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options63864.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__63881 = (i__63875 + (1));
i__63875 = G__63881;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63876),iter__63873.call(null,cljs.core.chunk_rest.call(null,s__63874__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__63876),null);
}
} else
{var x = cljs.core.first.call(null,s__63874__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__63880 = x;var text = cljs.core.nth.call(null,vec__63880,(0),null);var val = cljs.core.nth.call(null,vec__63880,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__63880,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options63864.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__63873.call(null,cljs.core.rest.call(null,s__63874__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options63864 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options63864__1.call(this,coll);
case 2:
return select_options63864__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options63864.cljs$core$IFn$_invoke$arity$1 = select_options63864__1;
select_options63864.cljs$core$IFn$_invoke$arity$2 = select_options63864__2;
return select_options63864;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options63864);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down63882 = (function() {
var drop_down63882 = null;
var drop_down63882__2 = (function (name,options){return drop_down63882.call(null,name,options,null);
});
var drop_down63882__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down63882 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down63882__2.call(this,name,options);
case 3:
return drop_down63882__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down63882.cljs$core$IFn$_invoke$arity$2 = drop_down63882__2;
drop_down63882.cljs$core$IFn$_invoke$arity$3 = drop_down63882__3;
return drop_down63882;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down63882);
/**
* Creates a text area element.
*/
sablono.core.text_area63883 = (function() {
var text_area63883 = null;
var text_area63883__1 = (function (name){return text_area63883.call(null,name,null);
});
var text_area63883__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area63883 = function(name,value){
switch(arguments.length){
case 1:
return text_area63883__1.call(this,name);
case 2:
return text_area63883__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area63883.cljs$core$IFn$_invoke$arity$1 = text_area63883__1;
text_area63883.cljs$core$IFn$_invoke$arity$2 = text_area63883__2;
return text_area63883;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area63883);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label63884 = (function label63884(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label63884);
/**
* Creates a submit button.
*/
sablono.core.submit_button63885 = (function submit_button63885(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button63885);
/**
* Creates a form reset button.
*/
sablono.core.reset_button63886 = (function reset_button63886(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button63886);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to63887 = (function() { 
var form_to63887__delegate = function (p__63888,body){var vec__63890 = p__63888;var method = cljs.core.nth.call(null,vec__63890,(0),null);var action = cljs.core.nth.call(null,vec__63890,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to63887 = function (p__63888,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to63887__delegate.call(this,p__63888,body);};
form_to63887.cljs$lang$maxFixedArity = 1;
form_to63887.cljs$lang$applyTo = (function (arglist__63891){
var p__63888 = cljs.core.first(arglist__63891);
var body = cljs.core.rest(arglist__63891);
return form_to63887__delegate(p__63888,body);
});
form_to63887.cljs$core$IFn$_invoke$arity$variadic = form_to63887__delegate;
return form_to63887;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to63887);

//# sourceMappingURL=core.js.map