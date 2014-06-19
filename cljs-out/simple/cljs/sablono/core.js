// Compiled by ClojureScript 0.0-2227
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
var G__17371__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__17370 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__17370,0,null);var body = cljs.core.nthnext.call(null,vec__17370,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__17371 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__17371__delegate.call(this,args);};
G__17371.cljs$lang$maxFixedArity = 0;
G__17371.cljs$lang$applyTo = (function (arglist__17372){
var args = cljs.core.seq(arglist__17372);
return G__17371__delegate(args);
});
G__17371.cljs$core$IFn$_invoke$arity$variadic = G__17371__delegate;
return G__17371;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4264__auto__ = (function iter__17377(s__17378){return (new cljs.core.LazySeq(null,(function (){var s__17378__$1 = s__17378;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17378__$1);if(temp__4126__auto__)
{var s__17378__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17378__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17378__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17380 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17379 = 0;while(true){
if((i__17379 < size__4263__auto__))
{var args = cljs.core._nth.call(null,c__4262__auto__,i__17379);cljs.core.chunk_append.call(null,b__17380,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__17381 = (i__17379 + 1);
i__17379 = G__17381;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17380),iter__17377.call(null,cljs.core.chunk_rest.call(null,s__17378__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17380),null);
}
} else
{var args = cljs.core.first.call(null,s__17378__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__17377.call(null,cljs.core.rest.call(null,s__17378__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4264__auto__ = (function iter__17386(s__17387){return (new cljs.core.LazySeq(null,(function (){var s__17387__$1 = s__17387;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17387__$1);if(temp__4126__auto__)
{var s__17387__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17387__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17387__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17389 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17388 = 0;while(true){
if((i__17388 < size__4263__auto__))
{var style = cljs.core._nth.call(null,c__4262__auto__,i__17388);cljs.core.chunk_append.call(null,b__17389,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__17390 = (i__17388 + 1);
i__17388 = G__17390;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17389),iter__17386.call(null,cljs.core.chunk_rest.call(null,s__17387__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17389),null);
}
} else
{var style = cljs.core.first.call(null,s__17387__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__17386.call(null,cljs.core.rest.call(null,s__17387__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__17391){
var styles = cljs.core.seq(arglist__17391);
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
sablono.core.link_to17392 = (function() { 
var link_to17392__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to17392 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to17392__delegate.call(this,url,content);};
link_to17392.cljs$lang$maxFixedArity = 1;
link_to17392.cljs$lang$applyTo = (function (arglist__17393){
var url = cljs.core.first(arglist__17393);
var content = cljs.core.rest(arglist__17393);
return link_to17392__delegate(url,content);
});
link_to17392.cljs$core$IFn$_invoke$arity$variadic = link_to17392__delegate;
return link_to17392;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17392);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to17394 = (function() { 
var mail_to17394__delegate = function (e_mail,p__17395){var vec__17397 = p__17395;var content = cljs.core.nth.call(null,vec__17397,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3539__auto__ = content;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to17394 = function (e_mail,var_args){
var p__17395 = null;if (arguments.length > 1) {
  p__17395 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to17394__delegate.call(this,e_mail,p__17395);};
mail_to17394.cljs$lang$maxFixedArity = 1;
mail_to17394.cljs$lang$applyTo = (function (arglist__17398){
var e_mail = cljs.core.first(arglist__17398);
var p__17395 = cljs.core.rest(arglist__17398);
return mail_to17394__delegate(e_mail,p__17395);
});
mail_to17394.cljs$core$IFn$_invoke$arity$variadic = mail_to17394__delegate;
return mail_to17394;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17394);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list17399 = (function unordered_list17399(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4264__auto__ = (function iter__17404(s__17405){return (new cljs.core.LazySeq(null,(function (){var s__17405__$1 = s__17405;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17405__$1);if(temp__4126__auto__)
{var s__17405__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17405__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17405__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17407 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17406 = 0;while(true){
if((i__17406 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__17406);cljs.core.chunk_append.call(null,b__17407,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17408 = (i__17406 + 1);
i__17406 = G__17408;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17407),iter__17404.call(null,cljs.core.chunk_rest.call(null,s__17405__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17407),null);
}
} else
{var x = cljs.core.first.call(null,s__17405__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17404.call(null,cljs.core.rest.call(null,s__17405__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17399);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list17409 = (function ordered_list17409(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4264__auto__ = (function iter__17414(s__17415){return (new cljs.core.LazySeq(null,(function (){var s__17415__$1 = s__17415;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17415__$1);if(temp__4126__auto__)
{var s__17415__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17415__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17415__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17417 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17416 = 0;while(true){
if((i__17416 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__17416);cljs.core.chunk_append.call(null,b__17417,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__17418 = (i__17416 + 1);
i__17416 = G__17418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17417),iter__17414.call(null,cljs.core.chunk_rest.call(null,s__17415__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17417),null);
}
} else
{var x = cljs.core.first.call(null,s__17415__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__17414.call(null,cljs.core.rest.call(null,s__17415__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17409);
/**
* Create an image element.
*/
sablono.core.image17419 = (function() {
var image17419 = null;
var image17419__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image17419__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image17419 = function(src,alt){
switch(arguments.length){
case 1:
return image17419__1.call(this,src);
case 2:
return image17419__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image17419.cljs$core$IFn$_invoke$arity$1 = image17419__1;
image17419.cljs$core$IFn$_invoke$arity$2 = image17419__2;
return image17419;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17419);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__17420_SHARP_,p2__17421_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17420_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17421_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__17422_SHARP_,p2__17423_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__17422_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__17423_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field17424 = (function() {
var color_field17424 = null;
var color_field17424__1 = (function (name__10089__auto__){return color_field17424.call(null,name__10089__auto__,null);
});
var color_field17424__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10089__auto__,value__10090__auto__);
});
color_field17424 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return color_field17424__1.call(this,name__10089__auto__);
case 2:
return color_field17424__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field17424.cljs$core$IFn$_invoke$arity$1 = color_field17424__1;
color_field17424.cljs$core$IFn$_invoke$arity$2 = color_field17424__2;
return color_field17424;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17424);
/**
* Creates a date input field.
*/
sablono.core.date_field17425 = (function() {
var date_field17425 = null;
var date_field17425__1 = (function (name__10089__auto__){return date_field17425.call(null,name__10089__auto__,null);
});
var date_field17425__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10089__auto__,value__10090__auto__);
});
date_field17425 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return date_field17425__1.call(this,name__10089__auto__);
case 2:
return date_field17425__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field17425.cljs$core$IFn$_invoke$arity$1 = date_field17425__1;
date_field17425.cljs$core$IFn$_invoke$arity$2 = date_field17425__2;
return date_field17425;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17425);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field17426 = (function() {
var datetime_field17426 = null;
var datetime_field17426__1 = (function (name__10089__auto__){return datetime_field17426.call(null,name__10089__auto__,null);
});
var datetime_field17426__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10089__auto__,value__10090__auto__);
});
datetime_field17426 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_field17426__1.call(this,name__10089__auto__);
case 2:
return datetime_field17426__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field17426.cljs$core$IFn$_invoke$arity$1 = datetime_field17426__1;
datetime_field17426.cljs$core$IFn$_invoke$arity$2 = datetime_field17426__2;
return datetime_field17426;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17426);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field17427 = (function() {
var datetime_local_field17427 = null;
var datetime_local_field17427__1 = (function (name__10089__auto__){return datetime_local_field17427.call(null,name__10089__auto__,null);
});
var datetime_local_field17427__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10089__auto__,value__10090__auto__);
});
datetime_local_field17427 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_local_field17427__1.call(this,name__10089__auto__);
case 2:
return datetime_local_field17427__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field17427.cljs$core$IFn$_invoke$arity$1 = datetime_local_field17427__1;
datetime_local_field17427.cljs$core$IFn$_invoke$arity$2 = datetime_local_field17427__2;
return datetime_local_field17427;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17427);
/**
* Creates a email input field.
*/
sablono.core.email_field17428 = (function() {
var email_field17428 = null;
var email_field17428__1 = (function (name__10089__auto__){return email_field17428.call(null,name__10089__auto__,null);
});
var email_field17428__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10089__auto__,value__10090__auto__);
});
email_field17428 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return email_field17428__1.call(this,name__10089__auto__);
case 2:
return email_field17428__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field17428.cljs$core$IFn$_invoke$arity$1 = email_field17428__1;
email_field17428.cljs$core$IFn$_invoke$arity$2 = email_field17428__2;
return email_field17428;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17428);
/**
* Creates a file input field.
*/
sablono.core.file_field17429 = (function() {
var file_field17429 = null;
var file_field17429__1 = (function (name__10089__auto__){return file_field17429.call(null,name__10089__auto__,null);
});
var file_field17429__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10089__auto__,value__10090__auto__);
});
file_field17429 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return file_field17429__1.call(this,name__10089__auto__);
case 2:
return file_field17429__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field17429.cljs$core$IFn$_invoke$arity$1 = file_field17429__1;
file_field17429.cljs$core$IFn$_invoke$arity$2 = file_field17429__2;
return file_field17429;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17429);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field17430 = (function() {
var hidden_field17430 = null;
var hidden_field17430__1 = (function (name__10089__auto__){return hidden_field17430.call(null,name__10089__auto__,null);
});
var hidden_field17430__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10089__auto__,value__10090__auto__);
});
hidden_field17430 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return hidden_field17430__1.call(this,name__10089__auto__);
case 2:
return hidden_field17430__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field17430.cljs$core$IFn$_invoke$arity$1 = hidden_field17430__1;
hidden_field17430.cljs$core$IFn$_invoke$arity$2 = hidden_field17430__2;
return hidden_field17430;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17430);
/**
* Creates a month input field.
*/
sablono.core.month_field17431 = (function() {
var month_field17431 = null;
var month_field17431__1 = (function (name__10089__auto__){return month_field17431.call(null,name__10089__auto__,null);
});
var month_field17431__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10089__auto__,value__10090__auto__);
});
month_field17431 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return month_field17431__1.call(this,name__10089__auto__);
case 2:
return month_field17431__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field17431.cljs$core$IFn$_invoke$arity$1 = month_field17431__1;
month_field17431.cljs$core$IFn$_invoke$arity$2 = month_field17431__2;
return month_field17431;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17431);
/**
* Creates a number input field.
*/
sablono.core.number_field17432 = (function() {
var number_field17432 = null;
var number_field17432__1 = (function (name__10089__auto__){return number_field17432.call(null,name__10089__auto__,null);
});
var number_field17432__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10089__auto__,value__10090__auto__);
});
number_field17432 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return number_field17432__1.call(this,name__10089__auto__);
case 2:
return number_field17432__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field17432.cljs$core$IFn$_invoke$arity$1 = number_field17432__1;
number_field17432.cljs$core$IFn$_invoke$arity$2 = number_field17432__2;
return number_field17432;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17432);
/**
* Creates a password input field.
*/
sablono.core.password_field17433 = (function() {
var password_field17433 = null;
var password_field17433__1 = (function (name__10089__auto__){return password_field17433.call(null,name__10089__auto__,null);
});
var password_field17433__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10089__auto__,value__10090__auto__);
});
password_field17433 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return password_field17433__1.call(this,name__10089__auto__);
case 2:
return password_field17433__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field17433.cljs$core$IFn$_invoke$arity$1 = password_field17433__1;
password_field17433.cljs$core$IFn$_invoke$arity$2 = password_field17433__2;
return password_field17433;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17433);
/**
* Creates a range input field.
*/
sablono.core.range_field17434 = (function() {
var range_field17434 = null;
var range_field17434__1 = (function (name__10089__auto__){return range_field17434.call(null,name__10089__auto__,null);
});
var range_field17434__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10089__auto__,value__10090__auto__);
});
range_field17434 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return range_field17434__1.call(this,name__10089__auto__);
case 2:
return range_field17434__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field17434.cljs$core$IFn$_invoke$arity$1 = range_field17434__1;
range_field17434.cljs$core$IFn$_invoke$arity$2 = range_field17434__2;
return range_field17434;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17434);
/**
* Creates a search input field.
*/
sablono.core.search_field17435 = (function() {
var search_field17435 = null;
var search_field17435__1 = (function (name__10089__auto__){return search_field17435.call(null,name__10089__auto__,null);
});
var search_field17435__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10089__auto__,value__10090__auto__);
});
search_field17435 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return search_field17435__1.call(this,name__10089__auto__);
case 2:
return search_field17435__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field17435.cljs$core$IFn$_invoke$arity$1 = search_field17435__1;
search_field17435.cljs$core$IFn$_invoke$arity$2 = search_field17435__2;
return search_field17435;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17435);
/**
* Creates a tel input field.
*/
sablono.core.tel_field17436 = (function() {
var tel_field17436 = null;
var tel_field17436__1 = (function (name__10089__auto__){return tel_field17436.call(null,name__10089__auto__,null);
});
var tel_field17436__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10089__auto__,value__10090__auto__);
});
tel_field17436 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return tel_field17436__1.call(this,name__10089__auto__);
case 2:
return tel_field17436__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field17436.cljs$core$IFn$_invoke$arity$1 = tel_field17436__1;
tel_field17436.cljs$core$IFn$_invoke$arity$2 = tel_field17436__2;
return tel_field17436;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17436);
/**
* Creates a text input field.
*/
sablono.core.text_field17437 = (function() {
var text_field17437 = null;
var text_field17437__1 = (function (name__10089__auto__){return text_field17437.call(null,name__10089__auto__,null);
});
var text_field17437__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10089__auto__,value__10090__auto__);
});
text_field17437 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return text_field17437__1.call(this,name__10089__auto__);
case 2:
return text_field17437__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field17437.cljs$core$IFn$_invoke$arity$1 = text_field17437__1;
text_field17437.cljs$core$IFn$_invoke$arity$2 = text_field17437__2;
return text_field17437;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17437);
/**
* Creates a time input field.
*/
sablono.core.time_field17438 = (function() {
var time_field17438 = null;
var time_field17438__1 = (function (name__10089__auto__){return time_field17438.call(null,name__10089__auto__,null);
});
var time_field17438__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10089__auto__,value__10090__auto__);
});
time_field17438 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return time_field17438__1.call(this,name__10089__auto__);
case 2:
return time_field17438__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field17438.cljs$core$IFn$_invoke$arity$1 = time_field17438__1;
time_field17438.cljs$core$IFn$_invoke$arity$2 = time_field17438__2;
return time_field17438;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17438);
/**
* Creates a url input field.
*/
sablono.core.url_field17439 = (function() {
var url_field17439 = null;
var url_field17439__1 = (function (name__10089__auto__){return url_field17439.call(null,name__10089__auto__,null);
});
var url_field17439__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10089__auto__,value__10090__auto__);
});
url_field17439 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return url_field17439__1.call(this,name__10089__auto__);
case 2:
return url_field17439__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field17439.cljs$core$IFn$_invoke$arity$1 = url_field17439__1;
url_field17439.cljs$core$IFn$_invoke$arity$2 = url_field17439__2;
return url_field17439;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17439);
/**
* Creates a week input field.
*/
sablono.core.week_field17440 = (function() {
var week_field17440 = null;
var week_field17440__1 = (function (name__10089__auto__){return week_field17440.call(null,name__10089__auto__,null);
});
var week_field17440__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10089__auto__,value__10090__auto__);
});
week_field17440 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return week_field17440__1.call(this,name__10089__auto__);
case 2:
return week_field17440__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field17440.cljs$core$IFn$_invoke$arity$1 = week_field17440__1;
week_field17440.cljs$core$IFn$_invoke$arity$2 = week_field17440__2;
return week_field17440;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17440);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box17441 = (function() {
var check_box17441 = null;
var check_box17441__1 = (function (name){return check_box17441.call(null,name,null);
});
var check_box17441__2 = (function (name,checked_QMARK_){return check_box17441.call(null,name,checked_QMARK_,"true");
});
var check_box17441__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box17441 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box17441__1.call(this,name);
case 2:
return check_box17441__2.call(this,name,checked_QMARK_);
case 3:
return check_box17441__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box17441.cljs$core$IFn$_invoke$arity$1 = check_box17441__1;
check_box17441.cljs$core$IFn$_invoke$arity$2 = check_box17441__2;
check_box17441.cljs$core$IFn$_invoke$arity$3 = check_box17441__3;
return check_box17441;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17441);
/**
* Creates a radio button.
*/
sablono.core.radio_button17442 = (function() {
var radio_button17442 = null;
var radio_button17442__1 = (function (group){return radio_button17442.call(null,group,null);
});
var radio_button17442__2 = (function (group,checked_QMARK_){return radio_button17442.call(null,group,checked_QMARK_,"true");
});
var radio_button17442__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button17442 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button17442__1.call(this,group);
case 2:
return radio_button17442__2.call(this,group,checked_QMARK_);
case 3:
return radio_button17442__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button17442.cljs$core$IFn$_invoke$arity$1 = radio_button17442__1;
radio_button17442.cljs$core$IFn$_invoke$arity$2 = radio_button17442__2;
radio_button17442.cljs$core$IFn$_invoke$arity$3 = radio_button17442__3;
return radio_button17442;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17442);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options17443 = (function() {
var select_options17443 = null;
var select_options17443__1 = (function (coll){return select_options17443.call(null,coll,null);
});
var select_options17443__2 = (function (coll,selected){var iter__4264__auto__ = (function iter__17452(s__17453){return (new cljs.core.LazySeq(null,(function (){var s__17453__$1 = s__17453;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17453__$1);if(temp__4126__auto__)
{var s__17453__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17453__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__17453__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__17455 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__17454 = 0;while(true){
if((i__17454 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__17454);cljs.core.chunk_append.call(null,b__17455,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17458 = x;var text = cljs.core.nth.call(null,vec__17458,0,null);var val = cljs.core.nth.call(null,vec__17458,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17458,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17443.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__17460 = (i__17454 + 1);
i__17454 = G__17460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17455),iter__17452.call(null,cljs.core.chunk_rest.call(null,s__17453__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17455),null);
}
} else
{var x = cljs.core.first.call(null,s__17453__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17459 = x;var text = cljs.core.nth.call(null,vec__17459,0,null);var val = cljs.core.nth.call(null,vec__17459,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__17459,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options17443.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__17452.call(null,cljs.core.rest.call(null,s__17453__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
});
select_options17443 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options17443__1.call(this,coll);
case 2:
return select_options17443__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options17443.cljs$core$IFn$_invoke$arity$1 = select_options17443__1;
select_options17443.cljs$core$IFn$_invoke$arity$2 = select_options17443__2;
return select_options17443;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17443);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down17461 = (function() {
var drop_down17461 = null;
var drop_down17461__2 = (function (name,options){return drop_down17461.call(null,name,options,null);
});
var drop_down17461__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down17461 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down17461__2.call(this,name,options);
case 3:
return drop_down17461__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down17461.cljs$core$IFn$_invoke$arity$2 = drop_down17461__2;
drop_down17461.cljs$core$IFn$_invoke$arity$3 = drop_down17461__3;
return drop_down17461;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17461);
/**
* Creates a text area element.
*/
sablono.core.text_area17462 = (function() {
var text_area17462 = null;
var text_area17462__1 = (function (name){return text_area17462.call(null,name,null);
});
var text_area17462__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area17462 = function(name,value){
switch(arguments.length){
case 1:
return text_area17462__1.call(this,name);
case 2:
return text_area17462__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area17462.cljs$core$IFn$_invoke$arity$1 = text_area17462__1;
text_area17462.cljs$core$IFn$_invoke$arity$2 = text_area17462__2;
return text_area17462;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17462);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label17463 = (function label17463(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17463);
/**
* Creates a submit button.
*/
sablono.core.submit_button17464 = (function submit_button17464(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17464);
/**
* Creates a form reset button.
*/
sablono.core.reset_button17465 = (function reset_button17465(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17465);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to17466 = (function() { 
var form_to17466__delegate = function (p__17467,body){var vec__17469 = p__17467;var method = cljs.core.nth.call(null,vec__17469,0,null);var action = cljs.core.nth.call(null,vec__17469,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to17466 = function (p__17467,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to17466__delegate.call(this,p__17467,body);};
form_to17466.cljs$lang$maxFixedArity = 1;
form_to17466.cljs$lang$applyTo = (function (arglist__17470){
var p__17467 = cljs.core.first(arglist__17470);
var body = cljs.core.rest(arglist__17470);
return form_to17466__delegate(p__17467,body);
});
form_to17466.cljs$core$IFn$_invoke$arity$variadic = form_to17466__delegate;
return form_to17466;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17466);
