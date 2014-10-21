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
var G__26227__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__26226 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__26226,(0),null);var body = cljs.core.nthnext.call(null,vec__26226,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__26227 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__26227__delegate.call(this,args);};
G__26227.cljs$lang$maxFixedArity = 0;
G__26227.cljs$lang$applyTo = (function (arglist__26228){
var args = cljs.core.seq(arglist__26228);
return G__26227__delegate(args);
});
G__26227.cljs$core$IFn$_invoke$arity$variadic = G__26227__delegate;
return G__26227;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__26233(s__26234){return (new cljs.core.LazySeq(null,(function (){var s__26234__$1 = s__26234;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26234__$1);if(temp__4126__auto__)
{var s__26234__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26234__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__26234__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__26236 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__26235 = (0);while(true){
if((i__26235 < size__4374__auto__))
{var args = cljs.core._nth.call(null,c__4373__auto__,i__26235);cljs.core.chunk_append.call(null,b__26236,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__26237 = (i__26235 + (1));
i__26235 = G__26237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26236),iter__26233.call(null,cljs.core.chunk_rest.call(null,s__26234__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26236),null);
}
} else
{var args = cljs.core.first.call(null,s__26234__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26233.call(null,cljs.core.rest.call(null,s__26234__$2)));
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__26242(s__26243){return (new cljs.core.LazySeq(null,(function (){var s__26243__$1 = s__26243;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26243__$1);if(temp__4126__auto__)
{var s__26243__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26243__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__26243__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__26245 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__26244 = (0);while(true){
if((i__26244 < size__4374__auto__))
{var style = cljs.core._nth.call(null,c__4373__auto__,i__26244);cljs.core.chunk_append.call(null,b__26245,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__26246 = (i__26244 + (1));
i__26244 = G__26246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26245),iter__26242.call(null,cljs.core.chunk_rest.call(null,s__26243__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26245),null);
}
} else
{var style = cljs.core.first.call(null,s__26243__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26242.call(null,cljs.core.rest.call(null,s__26243__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__26247){
var styles = cljs.core.seq(arglist__26247);
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
sablono.core.link_to26248 = (function() { 
var link_to26248__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26248 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to26248__delegate.call(this,url,content);};
link_to26248.cljs$lang$maxFixedArity = 1;
link_to26248.cljs$lang$applyTo = (function (arglist__26249){
var url = cljs.core.first(arglist__26249);
var content = cljs.core.rest(arglist__26249);
return link_to26248__delegate(url,content);
});
link_to26248.cljs$core$IFn$_invoke$arity$variadic = link_to26248__delegate;
return link_to26248;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26248);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26250 = (function() { 
var mail_to26250__delegate = function (e_mail,p__26251){var vec__26253 = p__26251;var content = cljs.core.nth.call(null,vec__26253,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to26250 = function (e_mail,var_args){
var p__26251 = null;if (arguments.length > 1) {
  p__26251 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to26250__delegate.call(this,e_mail,p__26251);};
mail_to26250.cljs$lang$maxFixedArity = 1;
mail_to26250.cljs$lang$applyTo = (function (arglist__26254){
var e_mail = cljs.core.first(arglist__26254);
var p__26251 = cljs.core.rest(arglist__26254);
return mail_to26250__delegate(e_mail,p__26251);
});
mail_to26250.cljs$core$IFn$_invoke$arity$variadic = mail_to26250__delegate;
return mail_to26250;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26250);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26255 = (function unordered_list26255(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4375__auto__ = (function iter__26260(s__26261){return (new cljs.core.LazySeq(null,(function (){var s__26261__$1 = s__26261;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26261__$1);if(temp__4126__auto__)
{var s__26261__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26261__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__26261__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__26263 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__26262 = (0);while(true){
if((i__26262 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__26262);cljs.core.chunk_append.call(null,b__26263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26264 = (i__26262 + (1));
i__26262 = G__26264;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26263),iter__26260.call(null,cljs.core.chunk_rest.call(null,s__26261__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26263),null);
}
} else
{var x = cljs.core.first.call(null,s__26261__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26260.call(null,cljs.core.rest.call(null,s__26261__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26255);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26265 = (function ordered_list26265(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4375__auto__ = (function iter__26270(s__26271){return (new cljs.core.LazySeq(null,(function (){var s__26271__$1 = s__26271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26271__$1);if(temp__4126__auto__)
{var s__26271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26271__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__26271__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__26273 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__26272 = (0);while(true){
if((i__26272 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__26272);cljs.core.chunk_append.call(null,b__26273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__26274 = (i__26272 + (1));
i__26272 = G__26274;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26273),iter__26270.call(null,cljs.core.chunk_rest.call(null,s__26271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26273),null);
}
} else
{var x = cljs.core.first.call(null,s__26271__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26270.call(null,cljs.core.rest.call(null,s__26271__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26265);
/**
* Create an image element.
*/
sablono.core.image26275 = (function() {
var image26275 = null;
var image26275__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26275__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26275 = function(src,alt){
switch(arguments.length){
case 1:
return image26275__1.call(this,src);
case 2:
return image26275__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26275.cljs$core$IFn$_invoke$arity$1 = image26275__1;
image26275.cljs$core$IFn$_invoke$arity$2 = image26275__2;
return image26275;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26275);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__26276_SHARP_,p2__26277_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26276_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26277_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__26278_SHARP_,p2__26279_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__26278_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__26279_SHARP_));
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
sablono.core.color_field26280 = (function() {
var color_field26280 = null;
var color_field26280__1 = (function (name__11139__auto__){return color_field26280.call(null,name__11139__auto__,null);
});
var color_field26280__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field26280 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field26280__1.call(this,name__11139__auto__);
case 2:
return color_field26280__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26280.cljs$core$IFn$_invoke$arity$1 = color_field26280__1;
color_field26280.cljs$core$IFn$_invoke$arity$2 = color_field26280__2;
return color_field26280;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26280);
/**
* Creates a date input field.
*/
sablono.core.date_field26281 = (function() {
var date_field26281 = null;
var date_field26281__1 = (function (name__11139__auto__){return date_field26281.call(null,name__11139__auto__,null);
});
var date_field26281__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field26281 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field26281__1.call(this,name__11139__auto__);
case 2:
return date_field26281__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26281.cljs$core$IFn$_invoke$arity$1 = date_field26281__1;
date_field26281.cljs$core$IFn$_invoke$arity$2 = date_field26281__2;
return date_field26281;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26281);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26282 = (function() {
var datetime_field26282 = null;
var datetime_field26282__1 = (function (name__11139__auto__){return datetime_field26282.call(null,name__11139__auto__,null);
});
var datetime_field26282__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field26282 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field26282__1.call(this,name__11139__auto__);
case 2:
return datetime_field26282__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26282.cljs$core$IFn$_invoke$arity$1 = datetime_field26282__1;
datetime_field26282.cljs$core$IFn$_invoke$arity$2 = datetime_field26282__2;
return datetime_field26282;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26282);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26283 = (function() {
var datetime_local_field26283 = null;
var datetime_local_field26283__1 = (function (name__11139__auto__){return datetime_local_field26283.call(null,name__11139__auto__,null);
});
var datetime_local_field26283__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field26283 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26283__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field26283__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26283.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26283__1;
datetime_local_field26283.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26283__2;
return datetime_local_field26283;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26283);
/**
* Creates a email input field.
*/
sablono.core.email_field26284 = (function() {
var email_field26284 = null;
var email_field26284__1 = (function (name__11139__auto__){return email_field26284.call(null,name__11139__auto__,null);
});
var email_field26284__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field26284 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field26284__1.call(this,name__11139__auto__);
case 2:
return email_field26284__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26284.cljs$core$IFn$_invoke$arity$1 = email_field26284__1;
email_field26284.cljs$core$IFn$_invoke$arity$2 = email_field26284__2;
return email_field26284;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26284);
/**
* Creates a file input field.
*/
sablono.core.file_field26285 = (function() {
var file_field26285 = null;
var file_field26285__1 = (function (name__11139__auto__){return file_field26285.call(null,name__11139__auto__,null);
});
var file_field26285__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field26285 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field26285__1.call(this,name__11139__auto__);
case 2:
return file_field26285__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26285.cljs$core$IFn$_invoke$arity$1 = file_field26285__1;
file_field26285.cljs$core$IFn$_invoke$arity$2 = file_field26285__2;
return file_field26285;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26285);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26286 = (function() {
var hidden_field26286 = null;
var hidden_field26286__1 = (function (name__11139__auto__){return hidden_field26286.call(null,name__11139__auto__,null);
});
var hidden_field26286__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field26286 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field26286__1.call(this,name__11139__auto__);
case 2:
return hidden_field26286__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26286.cljs$core$IFn$_invoke$arity$1 = hidden_field26286__1;
hidden_field26286.cljs$core$IFn$_invoke$arity$2 = hidden_field26286__2;
return hidden_field26286;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26286);
/**
* Creates a month input field.
*/
sablono.core.month_field26287 = (function() {
var month_field26287 = null;
var month_field26287__1 = (function (name__11139__auto__){return month_field26287.call(null,name__11139__auto__,null);
});
var month_field26287__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field26287 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field26287__1.call(this,name__11139__auto__);
case 2:
return month_field26287__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26287.cljs$core$IFn$_invoke$arity$1 = month_field26287__1;
month_field26287.cljs$core$IFn$_invoke$arity$2 = month_field26287__2;
return month_field26287;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26287);
/**
* Creates a number input field.
*/
sablono.core.number_field26288 = (function() {
var number_field26288 = null;
var number_field26288__1 = (function (name__11139__auto__){return number_field26288.call(null,name__11139__auto__,null);
});
var number_field26288__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field26288 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field26288__1.call(this,name__11139__auto__);
case 2:
return number_field26288__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26288.cljs$core$IFn$_invoke$arity$1 = number_field26288__1;
number_field26288.cljs$core$IFn$_invoke$arity$2 = number_field26288__2;
return number_field26288;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26288);
/**
* Creates a password input field.
*/
sablono.core.password_field26289 = (function() {
var password_field26289 = null;
var password_field26289__1 = (function (name__11139__auto__){return password_field26289.call(null,name__11139__auto__,null);
});
var password_field26289__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field26289 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field26289__1.call(this,name__11139__auto__);
case 2:
return password_field26289__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26289.cljs$core$IFn$_invoke$arity$1 = password_field26289__1;
password_field26289.cljs$core$IFn$_invoke$arity$2 = password_field26289__2;
return password_field26289;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26289);
/**
* Creates a range input field.
*/
sablono.core.range_field26290 = (function() {
var range_field26290 = null;
var range_field26290__1 = (function (name__11139__auto__){return range_field26290.call(null,name__11139__auto__,null);
});
var range_field26290__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field26290 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field26290__1.call(this,name__11139__auto__);
case 2:
return range_field26290__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26290.cljs$core$IFn$_invoke$arity$1 = range_field26290__1;
range_field26290.cljs$core$IFn$_invoke$arity$2 = range_field26290__2;
return range_field26290;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26290);
/**
* Creates a search input field.
*/
sablono.core.search_field26291 = (function() {
var search_field26291 = null;
var search_field26291__1 = (function (name__11139__auto__){return search_field26291.call(null,name__11139__auto__,null);
});
var search_field26291__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field26291 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field26291__1.call(this,name__11139__auto__);
case 2:
return search_field26291__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26291.cljs$core$IFn$_invoke$arity$1 = search_field26291__1;
search_field26291.cljs$core$IFn$_invoke$arity$2 = search_field26291__2;
return search_field26291;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26291);
/**
* Creates a tel input field.
*/
sablono.core.tel_field26292 = (function() {
var tel_field26292 = null;
var tel_field26292__1 = (function (name__11139__auto__){return tel_field26292.call(null,name__11139__auto__,null);
});
var tel_field26292__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field26292 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field26292__1.call(this,name__11139__auto__);
case 2:
return tel_field26292__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26292.cljs$core$IFn$_invoke$arity$1 = tel_field26292__1;
tel_field26292.cljs$core$IFn$_invoke$arity$2 = tel_field26292__2;
return tel_field26292;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26292);
/**
* Creates a text input field.
*/
sablono.core.text_field26293 = (function() {
var text_field26293 = null;
var text_field26293__1 = (function (name__11139__auto__){return text_field26293.call(null,name__11139__auto__,null);
});
var text_field26293__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field26293 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field26293__1.call(this,name__11139__auto__);
case 2:
return text_field26293__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26293.cljs$core$IFn$_invoke$arity$1 = text_field26293__1;
text_field26293.cljs$core$IFn$_invoke$arity$2 = text_field26293__2;
return text_field26293;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26293);
/**
* Creates a time input field.
*/
sablono.core.time_field26294 = (function() {
var time_field26294 = null;
var time_field26294__1 = (function (name__11139__auto__){return time_field26294.call(null,name__11139__auto__,null);
});
var time_field26294__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field26294 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field26294__1.call(this,name__11139__auto__);
case 2:
return time_field26294__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26294.cljs$core$IFn$_invoke$arity$1 = time_field26294__1;
time_field26294.cljs$core$IFn$_invoke$arity$2 = time_field26294__2;
return time_field26294;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26294);
/**
* Creates a url input field.
*/
sablono.core.url_field26295 = (function() {
var url_field26295 = null;
var url_field26295__1 = (function (name__11139__auto__){return url_field26295.call(null,name__11139__auto__,null);
});
var url_field26295__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field26295 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field26295__1.call(this,name__11139__auto__);
case 2:
return url_field26295__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26295.cljs$core$IFn$_invoke$arity$1 = url_field26295__1;
url_field26295.cljs$core$IFn$_invoke$arity$2 = url_field26295__2;
return url_field26295;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26295);
/**
* Creates a week input field.
*/
sablono.core.week_field26296 = (function() {
var week_field26296 = null;
var week_field26296__1 = (function (name__11139__auto__){return week_field26296.call(null,name__11139__auto__,null);
});
var week_field26296__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field26296 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field26296__1.call(this,name__11139__auto__);
case 2:
return week_field26296__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26296.cljs$core$IFn$_invoke$arity$1 = week_field26296__1;
week_field26296.cljs$core$IFn$_invoke$arity$2 = week_field26296__2;
return week_field26296;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26296);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26297 = (function() {
var check_box26297 = null;
var check_box26297__1 = (function (name){return check_box26297.call(null,name,null);
});
var check_box26297__2 = (function (name,checked_QMARK_){return check_box26297.call(null,name,checked_QMARK_,"true");
});
var check_box26297__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26297 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26297__1.call(this,name);
case 2:
return check_box26297__2.call(this,name,checked_QMARK_);
case 3:
return check_box26297__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26297.cljs$core$IFn$_invoke$arity$1 = check_box26297__1;
check_box26297.cljs$core$IFn$_invoke$arity$2 = check_box26297__2;
check_box26297.cljs$core$IFn$_invoke$arity$3 = check_box26297__3;
return check_box26297;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26297);
/**
* Creates a radio button.
*/
sablono.core.radio_button26298 = (function() {
var radio_button26298 = null;
var radio_button26298__1 = (function (group){return radio_button26298.call(null,group,null);
});
var radio_button26298__2 = (function (group,checked_QMARK_){return radio_button26298.call(null,group,checked_QMARK_,"true");
});
var radio_button26298__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26298 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26298__1.call(this,group);
case 2:
return radio_button26298__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26298__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26298.cljs$core$IFn$_invoke$arity$1 = radio_button26298__1;
radio_button26298.cljs$core$IFn$_invoke$arity$2 = radio_button26298__2;
radio_button26298.cljs$core$IFn$_invoke$arity$3 = radio_button26298__3;
return radio_button26298;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26298);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26299 = (function() {
var select_options26299 = null;
var select_options26299__1 = (function (coll){return select_options26299.call(null,coll,null);
});
var select_options26299__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__26308(s__26309){return (new cljs.core.LazySeq(null,(function (){var s__26309__$1 = s__26309;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26309__$1);if(temp__4126__auto__)
{var s__26309__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26309__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__26309__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__26311 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__26310 = (0);while(true){
if((i__26310 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__26310);cljs.core.chunk_append.call(null,b__26311,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26314 = x;var text = cljs.core.nth.call(null,vec__26314,(0),null);var val = cljs.core.nth.call(null,vec__26314,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26314,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26299.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__26316 = (i__26310 + (1));
i__26310 = G__26316;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26311),iter__26308.call(null,cljs.core.chunk_rest.call(null,s__26309__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26311),null);
}
} else
{var x = cljs.core.first.call(null,s__26309__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26315 = x;var text = cljs.core.nth.call(null,vec__26315,(0),null);var val = cljs.core.nth.call(null,vec__26315,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__26315,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26299.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26308.call(null,cljs.core.rest.call(null,s__26309__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
});
select_options26299 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26299__1.call(this,coll);
case 2:
return select_options26299__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26299.cljs$core$IFn$_invoke$arity$1 = select_options26299__1;
select_options26299.cljs$core$IFn$_invoke$arity$2 = select_options26299__2;
return select_options26299;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26299);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26317 = (function() {
var drop_down26317 = null;
var drop_down26317__2 = (function (name,options){return drop_down26317.call(null,name,options,null);
});
var drop_down26317__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26317 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26317__2.call(this,name,options);
case 3:
return drop_down26317__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26317.cljs$core$IFn$_invoke$arity$2 = drop_down26317__2;
drop_down26317.cljs$core$IFn$_invoke$arity$3 = drop_down26317__3;
return drop_down26317;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26317);
/**
* Creates a text area element.
*/
sablono.core.text_area26318 = (function() {
var text_area26318 = null;
var text_area26318__1 = (function (name){return text_area26318.call(null,name,null);
});
var text_area26318__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26318 = function(name,value){
switch(arguments.length){
case 1:
return text_area26318__1.call(this,name);
case 2:
return text_area26318__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26318.cljs$core$IFn$_invoke$arity$1 = text_area26318__1;
text_area26318.cljs$core$IFn$_invoke$arity$2 = text_area26318__2;
return text_area26318;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26318);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26319 = (function label26319(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26319);
/**
* Creates a submit button.
*/
sablono.core.submit_button26320 = (function submit_button26320(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26320);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26321 = (function reset_button26321(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26321);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26322 = (function() { 
var form_to26322__delegate = function (p__26323,body){var vec__26325 = p__26323;var method = cljs.core.nth.call(null,vec__26325,(0),null);var action = cljs.core.nth.call(null,vec__26325,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26322 = function (p__26323,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to26322__delegate.call(this,p__26323,body);};
form_to26322.cljs$lang$maxFixedArity = 1;
form_to26322.cljs$lang$applyTo = (function (arglist__26326){
var p__26323 = cljs.core.first(arglist__26326);
var body = cljs.core.rest(arglist__26326);
return form_to26322__delegate(p__26323,body);
});
form_to26322.cljs$core$IFn$_invoke$arity$variadic = form_to26322__delegate;
return form_to26322;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26322);
