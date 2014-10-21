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
var G__42545__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__42544 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__42544,(0),null);var body = cljs.core.nthnext.call(null,vec__42544,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__42545 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__42545__delegate.call(this,args);};
G__42545.cljs$lang$maxFixedArity = 0;
G__42545.cljs$lang$applyTo = (function (arglist__42546){
var args = cljs.core.seq(arglist__42546);
return G__42545__delegate(args);
});
G__42545.cljs$core$IFn$_invoke$arity$variadic = G__42545__delegate;
return G__42545;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__42551(s__42552){return (new cljs.core.LazySeq(null,(function (){var s__42552__$1 = s__42552;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42552__$1);if(temp__4126__auto__)
{var s__42552__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__42552__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__42552__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__42554 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__42553 = (0);while(true){
if((i__42553 < size__4374__auto__))
{var args = cljs.core._nth.call(null,c__4373__auto__,i__42553);cljs.core.chunk_append.call(null,b__42554,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__42555 = (i__42553 + (1));
i__42553 = G__42555;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42554),iter__42551.call(null,cljs.core.chunk_rest.call(null,s__42552__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42554),null);
}
} else
{var args = cljs.core.first.call(null,s__42552__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__42551.call(null,cljs.core.rest.call(null,s__42552__$2)));
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__42560(s__42561){return (new cljs.core.LazySeq(null,(function (){var s__42561__$1 = s__42561;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42561__$1);if(temp__4126__auto__)
{var s__42561__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__42561__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__42561__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__42563 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__42562 = (0);while(true){
if((i__42562 < size__4374__auto__))
{var style = cljs.core._nth.call(null,c__4373__auto__,i__42562);cljs.core.chunk_append.call(null,b__42563,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__42564 = (i__42562 + (1));
i__42562 = G__42564;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42563),iter__42560.call(null,cljs.core.chunk_rest.call(null,s__42561__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42563),null);
}
} else
{var style = cljs.core.first.call(null,s__42561__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__42560.call(null,cljs.core.rest.call(null,s__42561__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__42565){
var styles = cljs.core.seq(arglist__42565);
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
sablono.core.link_to42566 = (function() { 
var link_to42566__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to42566 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to42566__delegate.call(this,url,content);};
link_to42566.cljs$lang$maxFixedArity = 1;
link_to42566.cljs$lang$applyTo = (function (arglist__42567){
var url = cljs.core.first(arglist__42567);
var content = cljs.core.rest(arglist__42567);
return link_to42566__delegate(url,content);
});
link_to42566.cljs$core$IFn$_invoke$arity$variadic = link_to42566__delegate;
return link_to42566;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to42566);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to42568 = (function() { 
var mail_to42568__delegate = function (e_mail,p__42569){var vec__42571 = p__42569;var content = cljs.core.nth.call(null,vec__42571,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to42568 = function (e_mail,var_args){
var p__42569 = null;if (arguments.length > 1) {
  p__42569 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to42568__delegate.call(this,e_mail,p__42569);};
mail_to42568.cljs$lang$maxFixedArity = 1;
mail_to42568.cljs$lang$applyTo = (function (arglist__42572){
var e_mail = cljs.core.first(arglist__42572);
var p__42569 = cljs.core.rest(arglist__42572);
return mail_to42568__delegate(e_mail,p__42569);
});
mail_to42568.cljs$core$IFn$_invoke$arity$variadic = mail_to42568__delegate;
return mail_to42568;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to42568);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list42573 = (function unordered_list42573(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4375__auto__ = (function iter__42578(s__42579){return (new cljs.core.LazySeq(null,(function (){var s__42579__$1 = s__42579;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42579__$1);if(temp__4126__auto__)
{var s__42579__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__42579__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__42579__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__42581 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__42580 = (0);while(true){
if((i__42580 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__42580);cljs.core.chunk_append.call(null,b__42581,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__42582 = (i__42580 + (1));
i__42580 = G__42582;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42581),iter__42578.call(null,cljs.core.chunk_rest.call(null,s__42579__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42581),null);
}
} else
{var x = cljs.core.first.call(null,s__42579__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__42578.call(null,cljs.core.rest.call(null,s__42579__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list42573);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list42583 = (function ordered_list42583(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4375__auto__ = (function iter__42588(s__42589){return (new cljs.core.LazySeq(null,(function (){var s__42589__$1 = s__42589;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42589__$1);if(temp__4126__auto__)
{var s__42589__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__42589__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__42589__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__42591 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__42590 = (0);while(true){
if((i__42590 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__42590);cljs.core.chunk_append.call(null,b__42591,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__42592 = (i__42590 + (1));
i__42590 = G__42592;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42591),iter__42588.call(null,cljs.core.chunk_rest.call(null,s__42589__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42591),null);
}
} else
{var x = cljs.core.first.call(null,s__42589__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__42588.call(null,cljs.core.rest.call(null,s__42589__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list42583);
/**
* Create an image element.
*/
sablono.core.image42593 = (function() {
var image42593 = null;
var image42593__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image42593__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image42593 = function(src,alt){
switch(arguments.length){
case 1:
return image42593__1.call(this,src);
case 2:
return image42593__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image42593.cljs$core$IFn$_invoke$arity$1 = image42593__1;
image42593.cljs$core$IFn$_invoke$arity$2 = image42593__2;
return image42593;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image42593);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__42594_SHARP_,p2__42595_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42594_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42595_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__42596_SHARP_,p2__42597_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42596_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__42597_SHARP_));
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
sablono.core.color_field42598 = (function() {
var color_field42598 = null;
var color_field42598__1 = (function (name__11139__auto__){return color_field42598.call(null,name__11139__auto__,null);
});
var color_field42598__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field42598 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field42598__1.call(this,name__11139__auto__);
case 2:
return color_field42598__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field42598.cljs$core$IFn$_invoke$arity$1 = color_field42598__1;
color_field42598.cljs$core$IFn$_invoke$arity$2 = color_field42598__2;
return color_field42598;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field42598);
/**
* Creates a date input field.
*/
sablono.core.date_field42599 = (function() {
var date_field42599 = null;
var date_field42599__1 = (function (name__11139__auto__){return date_field42599.call(null,name__11139__auto__,null);
});
var date_field42599__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field42599 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field42599__1.call(this,name__11139__auto__);
case 2:
return date_field42599__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field42599.cljs$core$IFn$_invoke$arity$1 = date_field42599__1;
date_field42599.cljs$core$IFn$_invoke$arity$2 = date_field42599__2;
return date_field42599;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field42599);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field42600 = (function() {
var datetime_field42600 = null;
var datetime_field42600__1 = (function (name__11139__auto__){return datetime_field42600.call(null,name__11139__auto__,null);
});
var datetime_field42600__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field42600 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field42600__1.call(this,name__11139__auto__);
case 2:
return datetime_field42600__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field42600.cljs$core$IFn$_invoke$arity$1 = datetime_field42600__1;
datetime_field42600.cljs$core$IFn$_invoke$arity$2 = datetime_field42600__2;
return datetime_field42600;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field42600);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field42601 = (function() {
var datetime_local_field42601 = null;
var datetime_local_field42601__1 = (function (name__11139__auto__){return datetime_local_field42601.call(null,name__11139__auto__,null);
});
var datetime_local_field42601__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field42601 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field42601__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field42601__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field42601.cljs$core$IFn$_invoke$arity$1 = datetime_local_field42601__1;
datetime_local_field42601.cljs$core$IFn$_invoke$arity$2 = datetime_local_field42601__2;
return datetime_local_field42601;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field42601);
/**
* Creates a email input field.
*/
sablono.core.email_field42602 = (function() {
var email_field42602 = null;
var email_field42602__1 = (function (name__11139__auto__){return email_field42602.call(null,name__11139__auto__,null);
});
var email_field42602__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field42602 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field42602__1.call(this,name__11139__auto__);
case 2:
return email_field42602__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field42602.cljs$core$IFn$_invoke$arity$1 = email_field42602__1;
email_field42602.cljs$core$IFn$_invoke$arity$2 = email_field42602__2;
return email_field42602;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field42602);
/**
* Creates a file input field.
*/
sablono.core.file_field42603 = (function() {
var file_field42603 = null;
var file_field42603__1 = (function (name__11139__auto__){return file_field42603.call(null,name__11139__auto__,null);
});
var file_field42603__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field42603 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field42603__1.call(this,name__11139__auto__);
case 2:
return file_field42603__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field42603.cljs$core$IFn$_invoke$arity$1 = file_field42603__1;
file_field42603.cljs$core$IFn$_invoke$arity$2 = file_field42603__2;
return file_field42603;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field42603);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field42604 = (function() {
var hidden_field42604 = null;
var hidden_field42604__1 = (function (name__11139__auto__){return hidden_field42604.call(null,name__11139__auto__,null);
});
var hidden_field42604__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field42604 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field42604__1.call(this,name__11139__auto__);
case 2:
return hidden_field42604__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field42604.cljs$core$IFn$_invoke$arity$1 = hidden_field42604__1;
hidden_field42604.cljs$core$IFn$_invoke$arity$2 = hidden_field42604__2;
return hidden_field42604;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field42604);
/**
* Creates a month input field.
*/
sablono.core.month_field42605 = (function() {
var month_field42605 = null;
var month_field42605__1 = (function (name__11139__auto__){return month_field42605.call(null,name__11139__auto__,null);
});
var month_field42605__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field42605 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field42605__1.call(this,name__11139__auto__);
case 2:
return month_field42605__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field42605.cljs$core$IFn$_invoke$arity$1 = month_field42605__1;
month_field42605.cljs$core$IFn$_invoke$arity$2 = month_field42605__2;
return month_field42605;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field42605);
/**
* Creates a number input field.
*/
sablono.core.number_field42606 = (function() {
var number_field42606 = null;
var number_field42606__1 = (function (name__11139__auto__){return number_field42606.call(null,name__11139__auto__,null);
});
var number_field42606__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field42606 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field42606__1.call(this,name__11139__auto__);
case 2:
return number_field42606__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field42606.cljs$core$IFn$_invoke$arity$1 = number_field42606__1;
number_field42606.cljs$core$IFn$_invoke$arity$2 = number_field42606__2;
return number_field42606;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field42606);
/**
* Creates a password input field.
*/
sablono.core.password_field42607 = (function() {
var password_field42607 = null;
var password_field42607__1 = (function (name__11139__auto__){return password_field42607.call(null,name__11139__auto__,null);
});
var password_field42607__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field42607 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field42607__1.call(this,name__11139__auto__);
case 2:
return password_field42607__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field42607.cljs$core$IFn$_invoke$arity$1 = password_field42607__1;
password_field42607.cljs$core$IFn$_invoke$arity$2 = password_field42607__2;
return password_field42607;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field42607);
/**
* Creates a range input field.
*/
sablono.core.range_field42608 = (function() {
var range_field42608 = null;
var range_field42608__1 = (function (name__11139__auto__){return range_field42608.call(null,name__11139__auto__,null);
});
var range_field42608__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field42608 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field42608__1.call(this,name__11139__auto__);
case 2:
return range_field42608__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field42608.cljs$core$IFn$_invoke$arity$1 = range_field42608__1;
range_field42608.cljs$core$IFn$_invoke$arity$2 = range_field42608__2;
return range_field42608;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field42608);
/**
* Creates a search input field.
*/
sablono.core.search_field42609 = (function() {
var search_field42609 = null;
var search_field42609__1 = (function (name__11139__auto__){return search_field42609.call(null,name__11139__auto__,null);
});
var search_field42609__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field42609 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field42609__1.call(this,name__11139__auto__);
case 2:
return search_field42609__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field42609.cljs$core$IFn$_invoke$arity$1 = search_field42609__1;
search_field42609.cljs$core$IFn$_invoke$arity$2 = search_field42609__2;
return search_field42609;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field42609);
/**
* Creates a tel input field.
*/
sablono.core.tel_field42610 = (function() {
var tel_field42610 = null;
var tel_field42610__1 = (function (name__11139__auto__){return tel_field42610.call(null,name__11139__auto__,null);
});
var tel_field42610__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field42610 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field42610__1.call(this,name__11139__auto__);
case 2:
return tel_field42610__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field42610.cljs$core$IFn$_invoke$arity$1 = tel_field42610__1;
tel_field42610.cljs$core$IFn$_invoke$arity$2 = tel_field42610__2;
return tel_field42610;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field42610);
/**
* Creates a text input field.
*/
sablono.core.text_field42611 = (function() {
var text_field42611 = null;
var text_field42611__1 = (function (name__11139__auto__){return text_field42611.call(null,name__11139__auto__,null);
});
var text_field42611__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field42611 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field42611__1.call(this,name__11139__auto__);
case 2:
return text_field42611__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field42611.cljs$core$IFn$_invoke$arity$1 = text_field42611__1;
text_field42611.cljs$core$IFn$_invoke$arity$2 = text_field42611__2;
return text_field42611;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field42611);
/**
* Creates a time input field.
*/
sablono.core.time_field42612 = (function() {
var time_field42612 = null;
var time_field42612__1 = (function (name__11139__auto__){return time_field42612.call(null,name__11139__auto__,null);
});
var time_field42612__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field42612 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field42612__1.call(this,name__11139__auto__);
case 2:
return time_field42612__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field42612.cljs$core$IFn$_invoke$arity$1 = time_field42612__1;
time_field42612.cljs$core$IFn$_invoke$arity$2 = time_field42612__2;
return time_field42612;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field42612);
/**
* Creates a url input field.
*/
sablono.core.url_field42613 = (function() {
var url_field42613 = null;
var url_field42613__1 = (function (name__11139__auto__){return url_field42613.call(null,name__11139__auto__,null);
});
var url_field42613__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field42613 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field42613__1.call(this,name__11139__auto__);
case 2:
return url_field42613__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field42613.cljs$core$IFn$_invoke$arity$1 = url_field42613__1;
url_field42613.cljs$core$IFn$_invoke$arity$2 = url_field42613__2;
return url_field42613;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field42613);
/**
* Creates a week input field.
*/
sablono.core.week_field42614 = (function() {
var week_field42614 = null;
var week_field42614__1 = (function (name__11139__auto__){return week_field42614.call(null,name__11139__auto__,null);
});
var week_field42614__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field42614 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field42614__1.call(this,name__11139__auto__);
case 2:
return week_field42614__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field42614.cljs$core$IFn$_invoke$arity$1 = week_field42614__1;
week_field42614.cljs$core$IFn$_invoke$arity$2 = week_field42614__2;
return week_field42614;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field42614);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box42615 = (function() {
var check_box42615 = null;
var check_box42615__1 = (function (name){return check_box42615.call(null,name,null);
});
var check_box42615__2 = (function (name,checked_QMARK_){return check_box42615.call(null,name,checked_QMARK_,"true");
});
var check_box42615__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box42615 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box42615__1.call(this,name);
case 2:
return check_box42615__2.call(this,name,checked_QMARK_);
case 3:
return check_box42615__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box42615.cljs$core$IFn$_invoke$arity$1 = check_box42615__1;
check_box42615.cljs$core$IFn$_invoke$arity$2 = check_box42615__2;
check_box42615.cljs$core$IFn$_invoke$arity$3 = check_box42615__3;
return check_box42615;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box42615);
/**
* Creates a radio button.
*/
sablono.core.radio_button42616 = (function() {
var radio_button42616 = null;
var radio_button42616__1 = (function (group){return radio_button42616.call(null,group,null);
});
var radio_button42616__2 = (function (group,checked_QMARK_){return radio_button42616.call(null,group,checked_QMARK_,"true");
});
var radio_button42616__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button42616 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button42616__1.call(this,group);
case 2:
return radio_button42616__2.call(this,group,checked_QMARK_);
case 3:
return radio_button42616__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button42616.cljs$core$IFn$_invoke$arity$1 = radio_button42616__1;
radio_button42616.cljs$core$IFn$_invoke$arity$2 = radio_button42616__2;
radio_button42616.cljs$core$IFn$_invoke$arity$3 = radio_button42616__3;
return radio_button42616;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button42616);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options42617 = (function() {
var select_options42617 = null;
var select_options42617__1 = (function (coll){return select_options42617.call(null,coll,null);
});
var select_options42617__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__42626(s__42627){return (new cljs.core.LazySeq(null,(function (){var s__42627__$1 = s__42627;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__42627__$1);if(temp__4126__auto__)
{var s__42627__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__42627__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__42627__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__42629 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__42628 = (0);while(true){
if((i__42628 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__42628);cljs.core.chunk_append.call(null,b__42629,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__42632 = x;var text = cljs.core.nth.call(null,vec__42632,(0),null);var val = cljs.core.nth.call(null,vec__42632,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__42632,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options42617.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__42634 = (i__42628 + (1));
i__42628 = G__42634;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42629),iter__42626.call(null,cljs.core.chunk_rest.call(null,s__42627__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42629),null);
}
} else
{var x = cljs.core.first.call(null,s__42627__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__42633 = x;var text = cljs.core.nth.call(null,vec__42633,(0),null);var val = cljs.core.nth.call(null,vec__42633,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__42633,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options42617.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__42626.call(null,cljs.core.rest.call(null,s__42627__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
});
select_options42617 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options42617__1.call(this,coll);
case 2:
return select_options42617__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options42617.cljs$core$IFn$_invoke$arity$1 = select_options42617__1;
select_options42617.cljs$core$IFn$_invoke$arity$2 = select_options42617__2;
return select_options42617;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options42617);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down42635 = (function() {
var drop_down42635 = null;
var drop_down42635__2 = (function (name,options){return drop_down42635.call(null,name,options,null);
});
var drop_down42635__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down42635 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down42635__2.call(this,name,options);
case 3:
return drop_down42635__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down42635.cljs$core$IFn$_invoke$arity$2 = drop_down42635__2;
drop_down42635.cljs$core$IFn$_invoke$arity$3 = drop_down42635__3;
return drop_down42635;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down42635);
/**
* Creates a text area element.
*/
sablono.core.text_area42636 = (function() {
var text_area42636 = null;
var text_area42636__1 = (function (name){return text_area42636.call(null,name,null);
});
var text_area42636__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area42636 = function(name,value){
switch(arguments.length){
case 1:
return text_area42636__1.call(this,name);
case 2:
return text_area42636__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area42636.cljs$core$IFn$_invoke$arity$1 = text_area42636__1;
text_area42636.cljs$core$IFn$_invoke$arity$2 = text_area42636__2;
return text_area42636;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area42636);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label42637 = (function label42637(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label42637);
/**
* Creates a submit button.
*/
sablono.core.submit_button42638 = (function submit_button42638(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button42638);
/**
* Creates a form reset button.
*/
sablono.core.reset_button42639 = (function reset_button42639(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button42639);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to42640 = (function() { 
var form_to42640__delegate = function (p__42641,body){var vec__42643 = p__42641;var method = cljs.core.nth.call(null,vec__42643,(0),null);var action = cljs.core.nth.call(null,vec__42643,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to42640 = function (p__42641,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to42640__delegate.call(this,p__42641,body);};
form_to42640.cljs$lang$maxFixedArity = 1;
form_to42640.cljs$lang$applyTo = (function (arglist__42644){
var p__42641 = cljs.core.first(arglist__42644);
var body = cljs.core.rest(arglist__42644);
return form_to42640__delegate(p__42641,body);
});
form_to42640.cljs$core$IFn$_invoke$arity$variadic = form_to42640__delegate;
return form_to42640;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to42640);
