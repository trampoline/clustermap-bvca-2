// Compiled by ClojureScript 0.0-2356
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
var G__38559__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__38558 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__38558,(0),null);var body = cljs.core.nthnext.call(null,vec__38558,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__38559 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__38559__delegate.call(this,args);};
G__38559.cljs$lang$maxFixedArity = 0;
G__38559.cljs$lang$applyTo = (function (arglist__38560){
var args = cljs.core.seq(arglist__38560);
return G__38559__delegate(args);
});
G__38559.cljs$core$IFn$_invoke$arity$variadic = G__38559__delegate;
return G__38559;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__38565(s__38566){return (new cljs.core.LazySeq(null,(function (){var s__38566__$1 = s__38566;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38566__$1);if(temp__4126__auto__)
{var s__38566__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38566__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__38566__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__38568 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__38567 = (0);while(true){
if((i__38567 < size__4374__auto__))
{var args = cljs.core._nth.call(null,c__4373__auto__,i__38567);cljs.core.chunk_append.call(null,b__38568,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__38569 = (i__38567 + (1));
i__38567 = G__38569;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38568),iter__38565.call(null,cljs.core.chunk_rest.call(null,s__38566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38568),null);
}
} else
{var args = cljs.core.first.call(null,s__38566__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__38565.call(null,cljs.core.rest.call(null,s__38566__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__38574(s__38575){return (new cljs.core.LazySeq(null,(function (){var s__38575__$1 = s__38575;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38575__$1);if(temp__4126__auto__)
{var s__38575__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38575__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__38575__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__38577 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__38576 = (0);while(true){
if((i__38576 < size__4374__auto__))
{var style = cljs.core._nth.call(null,c__4373__auto__,i__38576);cljs.core.chunk_append.call(null,b__38577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__38578 = (i__38576 + (1));
i__38576 = G__38578;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38577),iter__38574.call(null,cljs.core.chunk_rest.call(null,s__38575__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38577),null);
}
} else
{var style = cljs.core.first.call(null,s__38575__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__38574.call(null,cljs.core.rest.call(null,s__38575__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__38579){
var styles = cljs.core.seq(arglist__38579);
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
sablono.core.link_to38580 = (function() { 
var link_to38580__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to38580 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to38580__delegate.call(this,url,content);};
link_to38580.cljs$lang$maxFixedArity = 1;
link_to38580.cljs$lang$applyTo = (function (arglist__38581){
var url = cljs.core.first(arglist__38581);
var content = cljs.core.rest(arglist__38581);
return link_to38580__delegate(url,content);
});
link_to38580.cljs$core$IFn$_invoke$arity$variadic = link_to38580__delegate;
return link_to38580;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to38580);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to38582 = (function() { 
var mail_to38582__delegate = function (e_mail,p__38583){var vec__38585 = p__38583;var content = cljs.core.nth.call(null,vec__38585,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to38582 = function (e_mail,var_args){
var p__38583 = null;if (arguments.length > 1) {
  p__38583 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to38582__delegate.call(this,e_mail,p__38583);};
mail_to38582.cljs$lang$maxFixedArity = 1;
mail_to38582.cljs$lang$applyTo = (function (arglist__38586){
var e_mail = cljs.core.first(arglist__38586);
var p__38583 = cljs.core.rest(arglist__38586);
return mail_to38582__delegate(e_mail,p__38583);
});
mail_to38582.cljs$core$IFn$_invoke$arity$variadic = mail_to38582__delegate;
return mail_to38582;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to38582);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list38587 = (function unordered_list38587(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4375__auto__ = (function iter__38592(s__38593){return (new cljs.core.LazySeq(null,(function (){var s__38593__$1 = s__38593;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38593__$1);if(temp__4126__auto__)
{var s__38593__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38593__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__38593__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__38595 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__38594 = (0);while(true){
if((i__38594 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__38594);cljs.core.chunk_append.call(null,b__38595,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__38596 = (i__38594 + (1));
i__38594 = G__38596;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38595),iter__38592.call(null,cljs.core.chunk_rest.call(null,s__38593__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38595),null);
}
} else
{var x = cljs.core.first.call(null,s__38593__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__38592.call(null,cljs.core.rest.call(null,s__38593__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list38587);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list38597 = (function ordered_list38597(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4375__auto__ = (function iter__38602(s__38603){return (new cljs.core.LazySeq(null,(function (){var s__38603__$1 = s__38603;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38603__$1);if(temp__4126__auto__)
{var s__38603__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38603__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__38603__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__38605 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__38604 = (0);while(true){
if((i__38604 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__38604);cljs.core.chunk_append.call(null,b__38605,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__38606 = (i__38604 + (1));
i__38604 = G__38606;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38605),iter__38602.call(null,cljs.core.chunk_rest.call(null,s__38603__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38605),null);
}
} else
{var x = cljs.core.first.call(null,s__38603__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__38602.call(null,cljs.core.rest.call(null,s__38603__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list38597);
/**
* Create an image element.
*/
sablono.core.image38607 = (function() {
var image38607 = null;
var image38607__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image38607__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image38607 = function(src,alt){
switch(arguments.length){
case 1:
return image38607__1.call(this,src);
case 2:
return image38607__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image38607.cljs$core$IFn$_invoke$arity$1 = image38607__1;
image38607.cljs$core$IFn$_invoke$arity$2 = image38607__2;
return image38607;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image38607);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__38608_SHARP_,p2__38609_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38608_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38609_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__38610_SHARP_,p2__38611_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__38610_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__38611_SHARP_));
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
sablono.core.color_field38612 = (function() {
var color_field38612 = null;
var color_field38612__1 = (function (name__11139__auto__){return color_field38612.call(null,name__11139__auto__,null);
});
var color_field38612__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field38612 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field38612__1.call(this,name__11139__auto__);
case 2:
return color_field38612__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field38612.cljs$core$IFn$_invoke$arity$1 = color_field38612__1;
color_field38612.cljs$core$IFn$_invoke$arity$2 = color_field38612__2;
return color_field38612;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field38612);
/**
* Creates a date input field.
*/
sablono.core.date_field38613 = (function() {
var date_field38613 = null;
var date_field38613__1 = (function (name__11139__auto__){return date_field38613.call(null,name__11139__auto__,null);
});
var date_field38613__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field38613 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field38613__1.call(this,name__11139__auto__);
case 2:
return date_field38613__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field38613.cljs$core$IFn$_invoke$arity$1 = date_field38613__1;
date_field38613.cljs$core$IFn$_invoke$arity$2 = date_field38613__2;
return date_field38613;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field38613);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field38614 = (function() {
var datetime_field38614 = null;
var datetime_field38614__1 = (function (name__11139__auto__){return datetime_field38614.call(null,name__11139__auto__,null);
});
var datetime_field38614__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field38614 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field38614__1.call(this,name__11139__auto__);
case 2:
return datetime_field38614__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field38614.cljs$core$IFn$_invoke$arity$1 = datetime_field38614__1;
datetime_field38614.cljs$core$IFn$_invoke$arity$2 = datetime_field38614__2;
return datetime_field38614;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field38614);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field38615 = (function() {
var datetime_local_field38615 = null;
var datetime_local_field38615__1 = (function (name__11139__auto__){return datetime_local_field38615.call(null,name__11139__auto__,null);
});
var datetime_local_field38615__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field38615 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field38615__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field38615__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field38615.cljs$core$IFn$_invoke$arity$1 = datetime_local_field38615__1;
datetime_local_field38615.cljs$core$IFn$_invoke$arity$2 = datetime_local_field38615__2;
return datetime_local_field38615;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field38615);
/**
* Creates a email input field.
*/
sablono.core.email_field38616 = (function() {
var email_field38616 = null;
var email_field38616__1 = (function (name__11139__auto__){return email_field38616.call(null,name__11139__auto__,null);
});
var email_field38616__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field38616 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field38616__1.call(this,name__11139__auto__);
case 2:
return email_field38616__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field38616.cljs$core$IFn$_invoke$arity$1 = email_field38616__1;
email_field38616.cljs$core$IFn$_invoke$arity$2 = email_field38616__2;
return email_field38616;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field38616);
/**
* Creates a file input field.
*/
sablono.core.file_field38617 = (function() {
var file_field38617 = null;
var file_field38617__1 = (function (name__11139__auto__){return file_field38617.call(null,name__11139__auto__,null);
});
var file_field38617__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field38617 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field38617__1.call(this,name__11139__auto__);
case 2:
return file_field38617__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field38617.cljs$core$IFn$_invoke$arity$1 = file_field38617__1;
file_field38617.cljs$core$IFn$_invoke$arity$2 = file_field38617__2;
return file_field38617;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field38617);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field38618 = (function() {
var hidden_field38618 = null;
var hidden_field38618__1 = (function (name__11139__auto__){return hidden_field38618.call(null,name__11139__auto__,null);
});
var hidden_field38618__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field38618 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field38618__1.call(this,name__11139__auto__);
case 2:
return hidden_field38618__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field38618.cljs$core$IFn$_invoke$arity$1 = hidden_field38618__1;
hidden_field38618.cljs$core$IFn$_invoke$arity$2 = hidden_field38618__2;
return hidden_field38618;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field38618);
/**
* Creates a month input field.
*/
sablono.core.month_field38619 = (function() {
var month_field38619 = null;
var month_field38619__1 = (function (name__11139__auto__){return month_field38619.call(null,name__11139__auto__,null);
});
var month_field38619__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field38619 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field38619__1.call(this,name__11139__auto__);
case 2:
return month_field38619__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field38619.cljs$core$IFn$_invoke$arity$1 = month_field38619__1;
month_field38619.cljs$core$IFn$_invoke$arity$2 = month_field38619__2;
return month_field38619;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field38619);
/**
* Creates a number input field.
*/
sablono.core.number_field38620 = (function() {
var number_field38620 = null;
var number_field38620__1 = (function (name__11139__auto__){return number_field38620.call(null,name__11139__auto__,null);
});
var number_field38620__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field38620 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field38620__1.call(this,name__11139__auto__);
case 2:
return number_field38620__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field38620.cljs$core$IFn$_invoke$arity$1 = number_field38620__1;
number_field38620.cljs$core$IFn$_invoke$arity$2 = number_field38620__2;
return number_field38620;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field38620);
/**
* Creates a password input field.
*/
sablono.core.password_field38621 = (function() {
var password_field38621 = null;
var password_field38621__1 = (function (name__11139__auto__){return password_field38621.call(null,name__11139__auto__,null);
});
var password_field38621__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field38621 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field38621__1.call(this,name__11139__auto__);
case 2:
return password_field38621__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field38621.cljs$core$IFn$_invoke$arity$1 = password_field38621__1;
password_field38621.cljs$core$IFn$_invoke$arity$2 = password_field38621__2;
return password_field38621;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field38621);
/**
* Creates a range input field.
*/
sablono.core.range_field38622 = (function() {
var range_field38622 = null;
var range_field38622__1 = (function (name__11139__auto__){return range_field38622.call(null,name__11139__auto__,null);
});
var range_field38622__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field38622 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field38622__1.call(this,name__11139__auto__);
case 2:
return range_field38622__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field38622.cljs$core$IFn$_invoke$arity$1 = range_field38622__1;
range_field38622.cljs$core$IFn$_invoke$arity$2 = range_field38622__2;
return range_field38622;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field38622);
/**
* Creates a search input field.
*/
sablono.core.search_field38623 = (function() {
var search_field38623 = null;
var search_field38623__1 = (function (name__11139__auto__){return search_field38623.call(null,name__11139__auto__,null);
});
var search_field38623__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field38623 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field38623__1.call(this,name__11139__auto__);
case 2:
return search_field38623__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field38623.cljs$core$IFn$_invoke$arity$1 = search_field38623__1;
search_field38623.cljs$core$IFn$_invoke$arity$2 = search_field38623__2;
return search_field38623;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field38623);
/**
* Creates a tel input field.
*/
sablono.core.tel_field38624 = (function() {
var tel_field38624 = null;
var tel_field38624__1 = (function (name__11139__auto__){return tel_field38624.call(null,name__11139__auto__,null);
});
var tel_field38624__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field38624 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field38624__1.call(this,name__11139__auto__);
case 2:
return tel_field38624__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field38624.cljs$core$IFn$_invoke$arity$1 = tel_field38624__1;
tel_field38624.cljs$core$IFn$_invoke$arity$2 = tel_field38624__2;
return tel_field38624;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field38624);
/**
* Creates a text input field.
*/
sablono.core.text_field38625 = (function() {
var text_field38625 = null;
var text_field38625__1 = (function (name__11139__auto__){return text_field38625.call(null,name__11139__auto__,null);
});
var text_field38625__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field38625 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field38625__1.call(this,name__11139__auto__);
case 2:
return text_field38625__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field38625.cljs$core$IFn$_invoke$arity$1 = text_field38625__1;
text_field38625.cljs$core$IFn$_invoke$arity$2 = text_field38625__2;
return text_field38625;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field38625);
/**
* Creates a time input field.
*/
sablono.core.time_field38626 = (function() {
var time_field38626 = null;
var time_field38626__1 = (function (name__11139__auto__){return time_field38626.call(null,name__11139__auto__,null);
});
var time_field38626__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field38626 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field38626__1.call(this,name__11139__auto__);
case 2:
return time_field38626__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field38626.cljs$core$IFn$_invoke$arity$1 = time_field38626__1;
time_field38626.cljs$core$IFn$_invoke$arity$2 = time_field38626__2;
return time_field38626;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field38626);
/**
* Creates a url input field.
*/
sablono.core.url_field38627 = (function() {
var url_field38627 = null;
var url_field38627__1 = (function (name__11139__auto__){return url_field38627.call(null,name__11139__auto__,null);
});
var url_field38627__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field38627 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field38627__1.call(this,name__11139__auto__);
case 2:
return url_field38627__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field38627.cljs$core$IFn$_invoke$arity$1 = url_field38627__1;
url_field38627.cljs$core$IFn$_invoke$arity$2 = url_field38627__2;
return url_field38627;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field38627);
/**
* Creates a week input field.
*/
sablono.core.week_field38628 = (function() {
var week_field38628 = null;
var week_field38628__1 = (function (name__11139__auto__){return week_field38628.call(null,name__11139__auto__,null);
});
var week_field38628__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field38628 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field38628__1.call(this,name__11139__auto__);
case 2:
return week_field38628__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field38628.cljs$core$IFn$_invoke$arity$1 = week_field38628__1;
week_field38628.cljs$core$IFn$_invoke$arity$2 = week_field38628__2;
return week_field38628;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field38628);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box38629 = (function() {
var check_box38629 = null;
var check_box38629__1 = (function (name){return check_box38629.call(null,name,null);
});
var check_box38629__2 = (function (name,checked_QMARK_){return check_box38629.call(null,name,checked_QMARK_,"true");
});
var check_box38629__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box38629 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box38629__1.call(this,name);
case 2:
return check_box38629__2.call(this,name,checked_QMARK_);
case 3:
return check_box38629__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box38629.cljs$core$IFn$_invoke$arity$1 = check_box38629__1;
check_box38629.cljs$core$IFn$_invoke$arity$2 = check_box38629__2;
check_box38629.cljs$core$IFn$_invoke$arity$3 = check_box38629__3;
return check_box38629;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38629);
/**
* Creates a radio button.
*/
sablono.core.radio_button38630 = (function() {
var radio_button38630 = null;
var radio_button38630__1 = (function (group){return radio_button38630.call(null,group,null);
});
var radio_button38630__2 = (function (group,checked_QMARK_){return radio_button38630.call(null,group,checked_QMARK_,"true");
});
var radio_button38630__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button38630 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button38630__1.call(this,group);
case 2:
return radio_button38630__2.call(this,group,checked_QMARK_);
case 3:
return radio_button38630__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button38630.cljs$core$IFn$_invoke$arity$1 = radio_button38630__1;
radio_button38630.cljs$core$IFn$_invoke$arity$2 = radio_button38630__2;
radio_button38630.cljs$core$IFn$_invoke$arity$3 = radio_button38630__3;
return radio_button38630;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38630);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options38631 = (function() {
var select_options38631 = null;
var select_options38631__1 = (function (coll){return select_options38631.call(null,coll,null);
});
var select_options38631__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__38640(s__38641){return (new cljs.core.LazySeq(null,(function (){var s__38641__$1 = s__38641;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__38641__$1);if(temp__4126__auto__)
{var s__38641__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__38641__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__38641__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__38643 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__38642 = (0);while(true){
if((i__38642 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__38642);cljs.core.chunk_append.call(null,b__38643,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38646 = x;var text = cljs.core.nth.call(null,vec__38646,(0),null);var val = cljs.core.nth.call(null,vec__38646,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__38646,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options38631.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__38648 = (i__38642 + (1));
i__38642 = G__38648;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38643),iter__38640.call(null,cljs.core.chunk_rest.call(null,s__38641__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38643),null);
}
} else
{var x = cljs.core.first.call(null,s__38641__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38647 = x;var text = cljs.core.nth.call(null,vec__38647,(0),null);var val = cljs.core.nth.call(null,vec__38647,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__38647,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options38631.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__38640.call(null,cljs.core.rest.call(null,s__38641__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
});
select_options38631 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options38631__1.call(this,coll);
case 2:
return select_options38631__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options38631.cljs$core$IFn$_invoke$arity$1 = select_options38631__1;
select_options38631.cljs$core$IFn$_invoke$arity$2 = select_options38631__2;
return select_options38631;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38631);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down38649 = (function() {
var drop_down38649 = null;
var drop_down38649__2 = (function (name,options){return drop_down38649.call(null,name,options,null);
});
var drop_down38649__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down38649 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down38649__2.call(this,name,options);
case 3:
return drop_down38649__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down38649.cljs$core$IFn$_invoke$arity$2 = drop_down38649__2;
drop_down38649.cljs$core$IFn$_invoke$arity$3 = drop_down38649__3;
return drop_down38649;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38649);
/**
* Creates a text area element.
*/
sablono.core.text_area38650 = (function() {
var text_area38650 = null;
var text_area38650__1 = (function (name){return text_area38650.call(null,name,null);
});
var text_area38650__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area38650 = function(name,value){
switch(arguments.length){
case 1:
return text_area38650__1.call(this,name);
case 2:
return text_area38650__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area38650.cljs$core$IFn$_invoke$arity$1 = text_area38650__1;
text_area38650.cljs$core$IFn$_invoke$arity$2 = text_area38650__2;
return text_area38650;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38650);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label38651 = (function label38651(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38651);
/**
* Creates a submit button.
*/
sablono.core.submit_button38652 = (function submit_button38652(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38652);
/**
* Creates a form reset button.
*/
sablono.core.reset_button38653 = (function reset_button38653(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38653);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to38654 = (function() { 
var form_to38654__delegate = function (p__38655,body){var vec__38657 = p__38655;var method = cljs.core.nth.call(null,vec__38657,(0),null);var action = cljs.core.nth.call(null,vec__38657,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to38654 = function (p__38655,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to38654__delegate.call(this,p__38655,body);};
form_to38654.cljs$lang$maxFixedArity = 1;
form_to38654.cljs$lang$applyTo = (function (arglist__38658){
var p__38655 = cljs.core.first(arglist__38658);
var body = cljs.core.rest(arglist__38658);
return form_to38654__delegate(p__38655,body);
});
form_to38654.cljs$core$IFn$_invoke$arity$variadic = form_to38654__delegate;
return form_to38654;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38654);
