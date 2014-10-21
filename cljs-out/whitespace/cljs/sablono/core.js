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
var G__21596__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__21595 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__21595,(0),null);var body = cljs.core.nthnext.call(null,vec__21595,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__21596 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__21596__delegate.call(this,args);};
G__21596.cljs$lang$maxFixedArity = 0;
G__21596.cljs$lang$applyTo = (function (arglist__21597){
var args = cljs.core.seq(arglist__21597);
return G__21596__delegate(args);
});
G__21596.cljs$core$IFn$_invoke$arity$variadic = G__21596__delegate;
return G__21596;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__21602(s__21603){return (new cljs.core.LazySeq(null,(function (){var s__21603__$1 = s__21603;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21603__$1);if(temp__4126__auto__)
{var s__21603__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21603__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__21603__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__21605 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__21604 = (0);while(true){
if((i__21604 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__21604);cljs.core.chunk_append.call(null,b__21605,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__21606 = (i__21604 + (1));
i__21604 = G__21606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21605),iter__21602.call(null,cljs.core.chunk_rest.call(null,s__21603__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21605),null);
}
} else
{var args = cljs.core.first.call(null,s__21603__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__21602.call(null,cljs.core.rest.call(null,s__21603__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__21611(s__21612){return (new cljs.core.LazySeq(null,(function (){var s__21612__$1 = s__21612;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21612__$1);if(temp__4126__auto__)
{var s__21612__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21612__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__21612__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__21614 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__21613 = (0);while(true){
if((i__21613 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__21613);cljs.core.chunk_append.call(null,b__21614,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__21615 = (i__21613 + (1));
i__21613 = G__21615;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21614),iter__21611.call(null,cljs.core.chunk_rest.call(null,s__21612__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21614),null);
}
} else
{var style = cljs.core.first.call(null,s__21612__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__21611.call(null,cljs.core.rest.call(null,s__21612__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__21616){
var styles = cljs.core.seq(arglist__21616);
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
sablono.core.link_to21617 = (function() { 
var link_to21617__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to21617 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to21617__delegate.call(this,url,content);};
link_to21617.cljs$lang$maxFixedArity = 1;
link_to21617.cljs$lang$applyTo = (function (arglist__21618){
var url = cljs.core.first(arglist__21618);
var content = cljs.core.rest(arglist__21618);
return link_to21617__delegate(url,content);
});
link_to21617.cljs$core$IFn$_invoke$arity$variadic = link_to21617__delegate;
return link_to21617;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to21617);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to21619 = (function() { 
var mail_to21619__delegate = function (e_mail,p__21620){var vec__21622 = p__21620;var content = cljs.core.nth.call(null,vec__21622,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to21619 = function (e_mail,var_args){
var p__21620 = null;if (arguments.length > 1) {
  p__21620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to21619__delegate.call(this,e_mail,p__21620);};
mail_to21619.cljs$lang$maxFixedArity = 1;
mail_to21619.cljs$lang$applyTo = (function (arglist__21623){
var e_mail = cljs.core.first(arglist__21623);
var p__21620 = cljs.core.rest(arglist__21623);
return mail_to21619__delegate(e_mail,p__21620);
});
mail_to21619.cljs$core$IFn$_invoke$arity$variadic = mail_to21619__delegate;
return mail_to21619;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to21619);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list21624 = (function unordered_list21624(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__21629(s__21630){return (new cljs.core.LazySeq(null,(function (){var s__21630__$1 = s__21630;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21630__$1);if(temp__4126__auto__)
{var s__21630__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21630__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__21630__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__21632 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__21631 = (0);while(true){
if((i__21631 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__21631);cljs.core.chunk_append.call(null,b__21632,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__21633 = (i__21631 + (1));
i__21631 = G__21633;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21632),iter__21629.call(null,cljs.core.chunk_rest.call(null,s__21630__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21632),null);
}
} else
{var x = cljs.core.first.call(null,s__21630__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__21629.call(null,cljs.core.rest.call(null,s__21630__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list21624);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list21634 = (function ordered_list21634(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__21639(s__21640){return (new cljs.core.LazySeq(null,(function (){var s__21640__$1 = s__21640;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21640__$1);if(temp__4126__auto__)
{var s__21640__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21640__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__21640__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__21642 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__21641 = (0);while(true){
if((i__21641 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__21641);cljs.core.chunk_append.call(null,b__21642,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__21643 = (i__21641 + (1));
i__21641 = G__21643;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21642),iter__21639.call(null,cljs.core.chunk_rest.call(null,s__21640__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21642),null);
}
} else
{var x = cljs.core.first.call(null,s__21640__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__21639.call(null,cljs.core.rest.call(null,s__21640__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list21634);
/**
* Create an image element.
*/
sablono.core.image21644 = (function() {
var image21644 = null;
var image21644__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image21644__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image21644 = function(src,alt){
switch(arguments.length){
case 1:
return image21644__1.call(this,src);
case 2:
return image21644__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image21644.cljs$core$IFn$_invoke$arity$1 = image21644__1;
image21644.cljs$core$IFn$_invoke$arity$2 = image21644__2;
return image21644;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image21644);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__21645_SHARP_,p2__21646_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21645_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21646_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__21647_SHARP_,p2__21648_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21647_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__21648_SHARP_));
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
sablono.core.color_field21649 = (function() {
var color_field21649 = null;
var color_field21649__1 = (function (name__10441__auto__){return color_field21649.call(null,name__10441__auto__,null);
});
var color_field21649__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10441__auto__,value__10442__auto__);
});
color_field21649 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return color_field21649__1.call(this,name__10441__auto__);
case 2:
return color_field21649__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field21649.cljs$core$IFn$_invoke$arity$1 = color_field21649__1;
color_field21649.cljs$core$IFn$_invoke$arity$2 = color_field21649__2;
return color_field21649;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field21649);
/**
* Creates a date input field.
*/
sablono.core.date_field21650 = (function() {
var date_field21650 = null;
var date_field21650__1 = (function (name__10441__auto__){return date_field21650.call(null,name__10441__auto__,null);
});
var date_field21650__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10441__auto__,value__10442__auto__);
});
date_field21650 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return date_field21650__1.call(this,name__10441__auto__);
case 2:
return date_field21650__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field21650.cljs$core$IFn$_invoke$arity$1 = date_field21650__1;
date_field21650.cljs$core$IFn$_invoke$arity$2 = date_field21650__2;
return date_field21650;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field21650);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field21651 = (function() {
var datetime_field21651 = null;
var datetime_field21651__1 = (function (name__10441__auto__){return datetime_field21651.call(null,name__10441__auto__,null);
});
var datetime_field21651__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10441__auto__,value__10442__auto__);
});
datetime_field21651 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_field21651__1.call(this,name__10441__auto__);
case 2:
return datetime_field21651__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field21651.cljs$core$IFn$_invoke$arity$1 = datetime_field21651__1;
datetime_field21651.cljs$core$IFn$_invoke$arity$2 = datetime_field21651__2;
return datetime_field21651;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field21651);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field21652 = (function() {
var datetime_local_field21652 = null;
var datetime_local_field21652__1 = (function (name__10441__auto__){return datetime_local_field21652.call(null,name__10441__auto__,null);
});
var datetime_local_field21652__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10441__auto__,value__10442__auto__);
});
datetime_local_field21652 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return datetime_local_field21652__1.call(this,name__10441__auto__);
case 2:
return datetime_local_field21652__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field21652.cljs$core$IFn$_invoke$arity$1 = datetime_local_field21652__1;
datetime_local_field21652.cljs$core$IFn$_invoke$arity$2 = datetime_local_field21652__2;
return datetime_local_field21652;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field21652);
/**
* Creates a email input field.
*/
sablono.core.email_field21653 = (function() {
var email_field21653 = null;
var email_field21653__1 = (function (name__10441__auto__){return email_field21653.call(null,name__10441__auto__,null);
});
var email_field21653__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10441__auto__,value__10442__auto__);
});
email_field21653 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return email_field21653__1.call(this,name__10441__auto__);
case 2:
return email_field21653__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field21653.cljs$core$IFn$_invoke$arity$1 = email_field21653__1;
email_field21653.cljs$core$IFn$_invoke$arity$2 = email_field21653__2;
return email_field21653;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field21653);
/**
* Creates a file input field.
*/
sablono.core.file_field21654 = (function() {
var file_field21654 = null;
var file_field21654__1 = (function (name__10441__auto__){return file_field21654.call(null,name__10441__auto__,null);
});
var file_field21654__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10441__auto__,value__10442__auto__);
});
file_field21654 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return file_field21654__1.call(this,name__10441__auto__);
case 2:
return file_field21654__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field21654.cljs$core$IFn$_invoke$arity$1 = file_field21654__1;
file_field21654.cljs$core$IFn$_invoke$arity$2 = file_field21654__2;
return file_field21654;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field21654);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field21655 = (function() {
var hidden_field21655 = null;
var hidden_field21655__1 = (function (name__10441__auto__){return hidden_field21655.call(null,name__10441__auto__,null);
});
var hidden_field21655__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10441__auto__,value__10442__auto__);
});
hidden_field21655 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return hidden_field21655__1.call(this,name__10441__auto__);
case 2:
return hidden_field21655__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field21655.cljs$core$IFn$_invoke$arity$1 = hidden_field21655__1;
hidden_field21655.cljs$core$IFn$_invoke$arity$2 = hidden_field21655__2;
return hidden_field21655;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field21655);
/**
* Creates a month input field.
*/
sablono.core.month_field21656 = (function() {
var month_field21656 = null;
var month_field21656__1 = (function (name__10441__auto__){return month_field21656.call(null,name__10441__auto__,null);
});
var month_field21656__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10441__auto__,value__10442__auto__);
});
month_field21656 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return month_field21656__1.call(this,name__10441__auto__);
case 2:
return month_field21656__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field21656.cljs$core$IFn$_invoke$arity$1 = month_field21656__1;
month_field21656.cljs$core$IFn$_invoke$arity$2 = month_field21656__2;
return month_field21656;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field21656);
/**
* Creates a number input field.
*/
sablono.core.number_field21657 = (function() {
var number_field21657 = null;
var number_field21657__1 = (function (name__10441__auto__){return number_field21657.call(null,name__10441__auto__,null);
});
var number_field21657__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10441__auto__,value__10442__auto__);
});
number_field21657 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return number_field21657__1.call(this,name__10441__auto__);
case 2:
return number_field21657__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field21657.cljs$core$IFn$_invoke$arity$1 = number_field21657__1;
number_field21657.cljs$core$IFn$_invoke$arity$2 = number_field21657__2;
return number_field21657;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field21657);
/**
* Creates a password input field.
*/
sablono.core.password_field21658 = (function() {
var password_field21658 = null;
var password_field21658__1 = (function (name__10441__auto__){return password_field21658.call(null,name__10441__auto__,null);
});
var password_field21658__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10441__auto__,value__10442__auto__);
});
password_field21658 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return password_field21658__1.call(this,name__10441__auto__);
case 2:
return password_field21658__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field21658.cljs$core$IFn$_invoke$arity$1 = password_field21658__1;
password_field21658.cljs$core$IFn$_invoke$arity$2 = password_field21658__2;
return password_field21658;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field21658);
/**
* Creates a range input field.
*/
sablono.core.range_field21659 = (function() {
var range_field21659 = null;
var range_field21659__1 = (function (name__10441__auto__){return range_field21659.call(null,name__10441__auto__,null);
});
var range_field21659__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10441__auto__,value__10442__auto__);
});
range_field21659 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return range_field21659__1.call(this,name__10441__auto__);
case 2:
return range_field21659__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field21659.cljs$core$IFn$_invoke$arity$1 = range_field21659__1;
range_field21659.cljs$core$IFn$_invoke$arity$2 = range_field21659__2;
return range_field21659;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field21659);
/**
* Creates a search input field.
*/
sablono.core.search_field21660 = (function() {
var search_field21660 = null;
var search_field21660__1 = (function (name__10441__auto__){return search_field21660.call(null,name__10441__auto__,null);
});
var search_field21660__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10441__auto__,value__10442__auto__);
});
search_field21660 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return search_field21660__1.call(this,name__10441__auto__);
case 2:
return search_field21660__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field21660.cljs$core$IFn$_invoke$arity$1 = search_field21660__1;
search_field21660.cljs$core$IFn$_invoke$arity$2 = search_field21660__2;
return search_field21660;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field21660);
/**
* Creates a tel input field.
*/
sablono.core.tel_field21661 = (function() {
var tel_field21661 = null;
var tel_field21661__1 = (function (name__10441__auto__){return tel_field21661.call(null,name__10441__auto__,null);
});
var tel_field21661__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10441__auto__,value__10442__auto__);
});
tel_field21661 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return tel_field21661__1.call(this,name__10441__auto__);
case 2:
return tel_field21661__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field21661.cljs$core$IFn$_invoke$arity$1 = tel_field21661__1;
tel_field21661.cljs$core$IFn$_invoke$arity$2 = tel_field21661__2;
return tel_field21661;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field21661);
/**
* Creates a text input field.
*/
sablono.core.text_field21662 = (function() {
var text_field21662 = null;
var text_field21662__1 = (function (name__10441__auto__){return text_field21662.call(null,name__10441__auto__,null);
});
var text_field21662__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10441__auto__,value__10442__auto__);
});
text_field21662 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return text_field21662__1.call(this,name__10441__auto__);
case 2:
return text_field21662__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field21662.cljs$core$IFn$_invoke$arity$1 = text_field21662__1;
text_field21662.cljs$core$IFn$_invoke$arity$2 = text_field21662__2;
return text_field21662;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field21662);
/**
* Creates a time input field.
*/
sablono.core.time_field21663 = (function() {
var time_field21663 = null;
var time_field21663__1 = (function (name__10441__auto__){return time_field21663.call(null,name__10441__auto__,null);
});
var time_field21663__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10441__auto__,value__10442__auto__);
});
time_field21663 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return time_field21663__1.call(this,name__10441__auto__);
case 2:
return time_field21663__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field21663.cljs$core$IFn$_invoke$arity$1 = time_field21663__1;
time_field21663.cljs$core$IFn$_invoke$arity$2 = time_field21663__2;
return time_field21663;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field21663);
/**
* Creates a url input field.
*/
sablono.core.url_field21664 = (function() {
var url_field21664 = null;
var url_field21664__1 = (function (name__10441__auto__){return url_field21664.call(null,name__10441__auto__,null);
});
var url_field21664__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10441__auto__,value__10442__auto__);
});
url_field21664 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return url_field21664__1.call(this,name__10441__auto__);
case 2:
return url_field21664__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field21664.cljs$core$IFn$_invoke$arity$1 = url_field21664__1;
url_field21664.cljs$core$IFn$_invoke$arity$2 = url_field21664__2;
return url_field21664;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field21664);
/**
* Creates a week input field.
*/
sablono.core.week_field21665 = (function() {
var week_field21665 = null;
var week_field21665__1 = (function (name__10441__auto__){return week_field21665.call(null,name__10441__auto__,null);
});
var week_field21665__2 = (function (name__10441__auto__,value__10442__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10441__auto__,value__10442__auto__);
});
week_field21665 = function(name__10441__auto__,value__10442__auto__){
switch(arguments.length){
case 1:
return week_field21665__1.call(this,name__10441__auto__);
case 2:
return week_field21665__2.call(this,name__10441__auto__,value__10442__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field21665.cljs$core$IFn$_invoke$arity$1 = week_field21665__1;
week_field21665.cljs$core$IFn$_invoke$arity$2 = week_field21665__2;
return week_field21665;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field21665);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box21666 = (function() {
var check_box21666 = null;
var check_box21666__1 = (function (name){return check_box21666.call(null,name,null);
});
var check_box21666__2 = (function (name,checked_QMARK_){return check_box21666.call(null,name,checked_QMARK_,"true");
});
var check_box21666__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box21666 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box21666__1.call(this,name);
case 2:
return check_box21666__2.call(this,name,checked_QMARK_);
case 3:
return check_box21666__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box21666.cljs$core$IFn$_invoke$arity$1 = check_box21666__1;
check_box21666.cljs$core$IFn$_invoke$arity$2 = check_box21666__2;
check_box21666.cljs$core$IFn$_invoke$arity$3 = check_box21666__3;
return check_box21666;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box21666);
/**
* Creates a radio button.
*/
sablono.core.radio_button21667 = (function() {
var radio_button21667 = null;
var radio_button21667__1 = (function (group){return radio_button21667.call(null,group,null);
});
var radio_button21667__2 = (function (group,checked_QMARK_){return radio_button21667.call(null,group,checked_QMARK_,"true");
});
var radio_button21667__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button21667 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button21667__1.call(this,group);
case 2:
return radio_button21667__2.call(this,group,checked_QMARK_);
case 3:
return radio_button21667__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button21667.cljs$core$IFn$_invoke$arity$1 = radio_button21667__1;
radio_button21667.cljs$core$IFn$_invoke$arity$2 = radio_button21667__2;
radio_button21667.cljs$core$IFn$_invoke$arity$3 = radio_button21667__3;
return radio_button21667;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button21667);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options21668 = (function() {
var select_options21668 = null;
var select_options21668__1 = (function (coll){return select_options21668.call(null,coll,null);
});
var select_options21668__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__21677(s__21678){return (new cljs.core.LazySeq(null,(function (){var s__21678__$1 = s__21678;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21678__$1);if(temp__4126__auto__)
{var s__21678__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21678__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__21678__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__21680 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__21679 = (0);while(true){
if((i__21679 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__21679);cljs.core.chunk_append.call(null,b__21680,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21683 = x;var text = cljs.core.nth.call(null,vec__21683,(0),null);var val = cljs.core.nth.call(null,vec__21683,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__21683,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options21668.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__21685 = (i__21679 + (1));
i__21679 = G__21685;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21680),iter__21677.call(null,cljs.core.chunk_rest.call(null,s__21678__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21680),null);
}
} else
{var x = cljs.core.first.call(null,s__21678__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__21684 = x;var text = cljs.core.nth.call(null,vec__21684,(0),null);var val = cljs.core.nth.call(null,vec__21684,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__21684,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options21668.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__21677.call(null,cljs.core.rest.call(null,s__21678__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options21668 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options21668__1.call(this,coll);
case 2:
return select_options21668__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options21668.cljs$core$IFn$_invoke$arity$1 = select_options21668__1;
select_options21668.cljs$core$IFn$_invoke$arity$2 = select_options21668__2;
return select_options21668;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options21668);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down21686 = (function() {
var drop_down21686 = null;
var drop_down21686__2 = (function (name,options){return drop_down21686.call(null,name,options,null);
});
var drop_down21686__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down21686 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down21686__2.call(this,name,options);
case 3:
return drop_down21686__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down21686.cljs$core$IFn$_invoke$arity$2 = drop_down21686__2;
drop_down21686.cljs$core$IFn$_invoke$arity$3 = drop_down21686__3;
return drop_down21686;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down21686);
/**
* Creates a text area element.
*/
sablono.core.text_area21687 = (function() {
var text_area21687 = null;
var text_area21687__1 = (function (name){return text_area21687.call(null,name,null);
});
var text_area21687__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area21687 = function(name,value){
switch(arguments.length){
case 1:
return text_area21687__1.call(this,name);
case 2:
return text_area21687__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area21687.cljs$core$IFn$_invoke$arity$1 = text_area21687__1;
text_area21687.cljs$core$IFn$_invoke$arity$2 = text_area21687__2;
return text_area21687;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area21687);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label21688 = (function label21688(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label21688);
/**
* Creates a submit button.
*/
sablono.core.submit_button21689 = (function submit_button21689(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button21689);
/**
* Creates a form reset button.
*/
sablono.core.reset_button21690 = (function reset_button21690(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button21690);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to21691 = (function() { 
var form_to21691__delegate = function (p__21692,body){var vec__21694 = p__21692;var method = cljs.core.nth.call(null,vec__21694,(0),null);var action = cljs.core.nth.call(null,vec__21694,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to21691 = function (p__21692,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to21691__delegate.call(this,p__21692,body);};
form_to21691.cljs$lang$maxFixedArity = 1;
form_to21691.cljs$lang$applyTo = (function (arglist__21695){
var p__21692 = cljs.core.first(arglist__21695);
var body = cljs.core.rest(arglist__21695);
return form_to21691__delegate(p__21692,body);
});
form_to21691.cljs$core$IFn$_invoke$arity$variadic = form_to21691__delegate;
return form_to21691;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to21691);
