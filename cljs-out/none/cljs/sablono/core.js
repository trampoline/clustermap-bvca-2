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
var G__56355__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__56354 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__56354,(0),null);var body = cljs.core.nthnext.call(null,vec__56354,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__56355 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__56355__delegate.call(this,args);};
G__56355.cljs$lang$maxFixedArity = 0;
G__56355.cljs$lang$applyTo = (function (arglist__56356){
var args = cljs.core.seq(arglist__56356);
return G__56355__delegate(args);
});
G__56355.cljs$core$IFn$_invoke$arity$variadic = G__56355__delegate;
return G__56355;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4283__auto__ = (function iter__56361(s__56362){return (new cljs.core.LazySeq(null,(function (){var s__56362__$1 = s__56362;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56362__$1);if(temp__4126__auto__)
{var s__56362__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56362__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__56362__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__56364 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__56363 = (0);while(true){
if((i__56363 < size__4282__auto__))
{var args = cljs.core._nth.call(null,c__4281__auto__,i__56363);cljs.core.chunk_append.call(null,b__56364,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__56365 = (i__56363 + (1));
i__56363 = G__56365;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56364),iter__56361.call(null,cljs.core.chunk_rest.call(null,s__56362__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56364),null);
}
} else
{var args = cljs.core.first.call(null,s__56362__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__56361.call(null,cljs.core.rest.call(null,s__56362__$2)));
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
var include_css__delegate = function (styles){var iter__4283__auto__ = (function iter__56370(s__56371){return (new cljs.core.LazySeq(null,(function (){var s__56371__$1 = s__56371;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56371__$1);if(temp__4126__auto__)
{var s__56371__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56371__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__56371__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__56373 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__56372 = (0);while(true){
if((i__56372 < size__4282__auto__))
{var style = cljs.core._nth.call(null,c__4281__auto__,i__56372);cljs.core.chunk_append.call(null,b__56373,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__56374 = (i__56372 + (1));
i__56372 = G__56374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56373),iter__56370.call(null,cljs.core.chunk_rest.call(null,s__56371__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56373),null);
}
} else
{var style = cljs.core.first.call(null,s__56371__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__56370.call(null,cljs.core.rest.call(null,s__56371__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__56375){
var styles = cljs.core.seq(arglist__56375);
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
sablono.core.link_to56376 = (function() { 
var link_to56376__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to56376 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to56376__delegate.call(this,url,content);};
link_to56376.cljs$lang$maxFixedArity = 1;
link_to56376.cljs$lang$applyTo = (function (arglist__56377){
var url = cljs.core.first(arglist__56377);
var content = cljs.core.rest(arglist__56377);
return link_to56376__delegate(url,content);
});
link_to56376.cljs$core$IFn$_invoke$arity$variadic = link_to56376__delegate;
return link_to56376;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to56376);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to56378 = (function() { 
var mail_to56378__delegate = function (e_mail,p__56379){var vec__56381 = p__56379;var content = cljs.core.nth.call(null,vec__56381,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3558__auto__ = content;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to56378 = function (e_mail,var_args){
var p__56379 = null;if (arguments.length > 1) {
  p__56379 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to56378__delegate.call(this,e_mail,p__56379);};
mail_to56378.cljs$lang$maxFixedArity = 1;
mail_to56378.cljs$lang$applyTo = (function (arglist__56382){
var e_mail = cljs.core.first(arglist__56382);
var p__56379 = cljs.core.rest(arglist__56382);
return mail_to56378__delegate(e_mail,p__56379);
});
mail_to56378.cljs$core$IFn$_invoke$arity$variadic = mail_to56378__delegate;
return mail_to56378;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to56378);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list56383 = (function unordered_list56383(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4283__auto__ = (function iter__56388(s__56389){return (new cljs.core.LazySeq(null,(function (){var s__56389__$1 = s__56389;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56389__$1);if(temp__4126__auto__)
{var s__56389__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56389__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__56389__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__56391 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__56390 = (0);while(true){
if((i__56390 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__56390);cljs.core.chunk_append.call(null,b__56391,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__56392 = (i__56390 + (1));
i__56390 = G__56392;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56391),iter__56388.call(null,cljs.core.chunk_rest.call(null,s__56389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56391),null);
}
} else
{var x = cljs.core.first.call(null,s__56389__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__56388.call(null,cljs.core.rest.call(null,s__56389__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list56383);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list56393 = (function ordered_list56393(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4283__auto__ = (function iter__56398(s__56399){return (new cljs.core.LazySeq(null,(function (){var s__56399__$1 = s__56399;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56399__$1);if(temp__4126__auto__)
{var s__56399__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56399__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__56399__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__56401 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__56400 = (0);while(true){
if((i__56400 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__56400);cljs.core.chunk_append.call(null,b__56401,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__56402 = (i__56400 + (1));
i__56400 = G__56402;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56401),iter__56398.call(null,cljs.core.chunk_rest.call(null,s__56399__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56401),null);
}
} else
{var x = cljs.core.first.call(null,s__56399__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__56398.call(null,cljs.core.rest.call(null,s__56399__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list56393);
/**
* Create an image element.
*/
sablono.core.image56403 = (function() {
var image56403 = null;
var image56403__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image56403__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image56403 = function(src,alt){
switch(arguments.length){
case 1:
return image56403__1.call(this,src);
case 2:
return image56403__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image56403.cljs$core$IFn$_invoke$arity$1 = image56403__1;
image56403.cljs$core$IFn$_invoke$arity$2 = image56403__2;
return image56403;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image56403);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__56404_SHARP_,p2__56405_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56404_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__56405_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__56406_SHARP_,p2__56407_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56406_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__56407_SHARP_));
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
sablono.core.color_field56408 = (function() {
var color_field56408 = null;
var color_field56408__1 = (function (name__10286__auto__){return color_field56408.call(null,name__10286__auto__,null);
});
var color_field56408__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__10286__auto__,value__10287__auto__);
});
color_field56408 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return color_field56408__1.call(this,name__10286__auto__);
case 2:
return color_field56408__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field56408.cljs$core$IFn$_invoke$arity$1 = color_field56408__1;
color_field56408.cljs$core$IFn$_invoke$arity$2 = color_field56408__2;
return color_field56408;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field56408);
/**
* Creates a date input field.
*/
sablono.core.date_field56409 = (function() {
var date_field56409 = null;
var date_field56409__1 = (function (name__10286__auto__){return date_field56409.call(null,name__10286__auto__,null);
});
var date_field56409__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__10286__auto__,value__10287__auto__);
});
date_field56409 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return date_field56409__1.call(this,name__10286__auto__);
case 2:
return date_field56409__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field56409.cljs$core$IFn$_invoke$arity$1 = date_field56409__1;
date_field56409.cljs$core$IFn$_invoke$arity$2 = date_field56409__2;
return date_field56409;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field56409);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field56410 = (function() {
var datetime_field56410 = null;
var datetime_field56410__1 = (function (name__10286__auto__){return datetime_field56410.call(null,name__10286__auto__,null);
});
var datetime_field56410__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__10286__auto__,value__10287__auto__);
});
datetime_field56410 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_field56410__1.call(this,name__10286__auto__);
case 2:
return datetime_field56410__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field56410.cljs$core$IFn$_invoke$arity$1 = datetime_field56410__1;
datetime_field56410.cljs$core$IFn$_invoke$arity$2 = datetime_field56410__2;
return datetime_field56410;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field56410);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field56411 = (function() {
var datetime_local_field56411 = null;
var datetime_local_field56411__1 = (function (name__10286__auto__){return datetime_local_field56411.call(null,name__10286__auto__,null);
});
var datetime_local_field56411__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__10286__auto__,value__10287__auto__);
});
datetime_local_field56411 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return datetime_local_field56411__1.call(this,name__10286__auto__);
case 2:
return datetime_local_field56411__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field56411.cljs$core$IFn$_invoke$arity$1 = datetime_local_field56411__1;
datetime_local_field56411.cljs$core$IFn$_invoke$arity$2 = datetime_local_field56411__2;
return datetime_local_field56411;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field56411);
/**
* Creates a email input field.
*/
sablono.core.email_field56412 = (function() {
var email_field56412 = null;
var email_field56412__1 = (function (name__10286__auto__){return email_field56412.call(null,name__10286__auto__,null);
});
var email_field56412__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__10286__auto__,value__10287__auto__);
});
email_field56412 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return email_field56412__1.call(this,name__10286__auto__);
case 2:
return email_field56412__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field56412.cljs$core$IFn$_invoke$arity$1 = email_field56412__1;
email_field56412.cljs$core$IFn$_invoke$arity$2 = email_field56412__2;
return email_field56412;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field56412);
/**
* Creates a file input field.
*/
sablono.core.file_field56413 = (function() {
var file_field56413 = null;
var file_field56413__1 = (function (name__10286__auto__){return file_field56413.call(null,name__10286__auto__,null);
});
var file_field56413__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__10286__auto__,value__10287__auto__);
});
file_field56413 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return file_field56413__1.call(this,name__10286__auto__);
case 2:
return file_field56413__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field56413.cljs$core$IFn$_invoke$arity$1 = file_field56413__1;
file_field56413.cljs$core$IFn$_invoke$arity$2 = file_field56413__2;
return file_field56413;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field56413);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field56414 = (function() {
var hidden_field56414 = null;
var hidden_field56414__1 = (function (name__10286__auto__){return hidden_field56414.call(null,name__10286__auto__,null);
});
var hidden_field56414__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__10286__auto__,value__10287__auto__);
});
hidden_field56414 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return hidden_field56414__1.call(this,name__10286__auto__);
case 2:
return hidden_field56414__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field56414.cljs$core$IFn$_invoke$arity$1 = hidden_field56414__1;
hidden_field56414.cljs$core$IFn$_invoke$arity$2 = hidden_field56414__2;
return hidden_field56414;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field56414);
/**
* Creates a month input field.
*/
sablono.core.month_field56415 = (function() {
var month_field56415 = null;
var month_field56415__1 = (function (name__10286__auto__){return month_field56415.call(null,name__10286__auto__,null);
});
var month_field56415__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__10286__auto__,value__10287__auto__);
});
month_field56415 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return month_field56415__1.call(this,name__10286__auto__);
case 2:
return month_field56415__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field56415.cljs$core$IFn$_invoke$arity$1 = month_field56415__1;
month_field56415.cljs$core$IFn$_invoke$arity$2 = month_field56415__2;
return month_field56415;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field56415);
/**
* Creates a number input field.
*/
sablono.core.number_field56416 = (function() {
var number_field56416 = null;
var number_field56416__1 = (function (name__10286__auto__){return number_field56416.call(null,name__10286__auto__,null);
});
var number_field56416__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__10286__auto__,value__10287__auto__);
});
number_field56416 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return number_field56416__1.call(this,name__10286__auto__);
case 2:
return number_field56416__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field56416.cljs$core$IFn$_invoke$arity$1 = number_field56416__1;
number_field56416.cljs$core$IFn$_invoke$arity$2 = number_field56416__2;
return number_field56416;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field56416);
/**
* Creates a password input field.
*/
sablono.core.password_field56417 = (function() {
var password_field56417 = null;
var password_field56417__1 = (function (name__10286__auto__){return password_field56417.call(null,name__10286__auto__,null);
});
var password_field56417__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__10286__auto__,value__10287__auto__);
});
password_field56417 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return password_field56417__1.call(this,name__10286__auto__);
case 2:
return password_field56417__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field56417.cljs$core$IFn$_invoke$arity$1 = password_field56417__1;
password_field56417.cljs$core$IFn$_invoke$arity$2 = password_field56417__2;
return password_field56417;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field56417);
/**
* Creates a range input field.
*/
sablono.core.range_field56418 = (function() {
var range_field56418 = null;
var range_field56418__1 = (function (name__10286__auto__){return range_field56418.call(null,name__10286__auto__,null);
});
var range_field56418__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__10286__auto__,value__10287__auto__);
});
range_field56418 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return range_field56418__1.call(this,name__10286__auto__);
case 2:
return range_field56418__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field56418.cljs$core$IFn$_invoke$arity$1 = range_field56418__1;
range_field56418.cljs$core$IFn$_invoke$arity$2 = range_field56418__2;
return range_field56418;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field56418);
/**
* Creates a search input field.
*/
sablono.core.search_field56419 = (function() {
var search_field56419 = null;
var search_field56419__1 = (function (name__10286__auto__){return search_field56419.call(null,name__10286__auto__,null);
});
var search_field56419__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__10286__auto__,value__10287__auto__);
});
search_field56419 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return search_field56419__1.call(this,name__10286__auto__);
case 2:
return search_field56419__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field56419.cljs$core$IFn$_invoke$arity$1 = search_field56419__1;
search_field56419.cljs$core$IFn$_invoke$arity$2 = search_field56419__2;
return search_field56419;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field56419);
/**
* Creates a tel input field.
*/
sablono.core.tel_field56420 = (function() {
var tel_field56420 = null;
var tel_field56420__1 = (function (name__10286__auto__){return tel_field56420.call(null,name__10286__auto__,null);
});
var tel_field56420__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__10286__auto__,value__10287__auto__);
});
tel_field56420 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return tel_field56420__1.call(this,name__10286__auto__);
case 2:
return tel_field56420__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field56420.cljs$core$IFn$_invoke$arity$1 = tel_field56420__1;
tel_field56420.cljs$core$IFn$_invoke$arity$2 = tel_field56420__2;
return tel_field56420;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field56420);
/**
* Creates a text input field.
*/
sablono.core.text_field56421 = (function() {
var text_field56421 = null;
var text_field56421__1 = (function (name__10286__auto__){return text_field56421.call(null,name__10286__auto__,null);
});
var text_field56421__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__10286__auto__,value__10287__auto__);
});
text_field56421 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return text_field56421__1.call(this,name__10286__auto__);
case 2:
return text_field56421__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field56421.cljs$core$IFn$_invoke$arity$1 = text_field56421__1;
text_field56421.cljs$core$IFn$_invoke$arity$2 = text_field56421__2;
return text_field56421;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field56421);
/**
* Creates a time input field.
*/
sablono.core.time_field56422 = (function() {
var time_field56422 = null;
var time_field56422__1 = (function (name__10286__auto__){return time_field56422.call(null,name__10286__auto__,null);
});
var time_field56422__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__10286__auto__,value__10287__auto__);
});
time_field56422 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return time_field56422__1.call(this,name__10286__auto__);
case 2:
return time_field56422__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field56422.cljs$core$IFn$_invoke$arity$1 = time_field56422__1;
time_field56422.cljs$core$IFn$_invoke$arity$2 = time_field56422__2;
return time_field56422;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field56422);
/**
* Creates a url input field.
*/
sablono.core.url_field56423 = (function() {
var url_field56423 = null;
var url_field56423__1 = (function (name__10286__auto__){return url_field56423.call(null,name__10286__auto__,null);
});
var url_field56423__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__10286__auto__,value__10287__auto__);
});
url_field56423 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return url_field56423__1.call(this,name__10286__auto__);
case 2:
return url_field56423__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field56423.cljs$core$IFn$_invoke$arity$1 = url_field56423__1;
url_field56423.cljs$core$IFn$_invoke$arity$2 = url_field56423__2;
return url_field56423;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field56423);
/**
* Creates a week input field.
*/
sablono.core.week_field56424 = (function() {
var week_field56424 = null;
var week_field56424__1 = (function (name__10286__auto__){return week_field56424.call(null,name__10286__auto__,null);
});
var week_field56424__2 = (function (name__10286__auto__,value__10287__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__10286__auto__,value__10287__auto__);
});
week_field56424 = function(name__10286__auto__,value__10287__auto__){
switch(arguments.length){
case 1:
return week_field56424__1.call(this,name__10286__auto__);
case 2:
return week_field56424__2.call(this,name__10286__auto__,value__10287__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field56424.cljs$core$IFn$_invoke$arity$1 = week_field56424__1;
week_field56424.cljs$core$IFn$_invoke$arity$2 = week_field56424__2;
return week_field56424;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field56424);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box56425 = (function() {
var check_box56425 = null;
var check_box56425__1 = (function (name){return check_box56425.call(null,name,null);
});
var check_box56425__2 = (function (name,checked_QMARK_){return check_box56425.call(null,name,checked_QMARK_,"true");
});
var check_box56425__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box56425 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box56425__1.call(this,name);
case 2:
return check_box56425__2.call(this,name,checked_QMARK_);
case 3:
return check_box56425__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box56425.cljs$core$IFn$_invoke$arity$1 = check_box56425__1;
check_box56425.cljs$core$IFn$_invoke$arity$2 = check_box56425__2;
check_box56425.cljs$core$IFn$_invoke$arity$3 = check_box56425__3;
return check_box56425;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box56425);
/**
* Creates a radio button.
*/
sablono.core.radio_button56426 = (function() {
var radio_button56426 = null;
var radio_button56426__1 = (function (group){return radio_button56426.call(null,group,null);
});
var radio_button56426__2 = (function (group,checked_QMARK_){return radio_button56426.call(null,group,checked_QMARK_,"true");
});
var radio_button56426__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button56426 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button56426__1.call(this,group);
case 2:
return radio_button56426__2.call(this,group,checked_QMARK_);
case 3:
return radio_button56426__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button56426.cljs$core$IFn$_invoke$arity$1 = radio_button56426__1;
radio_button56426.cljs$core$IFn$_invoke$arity$2 = radio_button56426__2;
radio_button56426.cljs$core$IFn$_invoke$arity$3 = radio_button56426__3;
return radio_button56426;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button56426);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options56427 = (function() {
var select_options56427 = null;
var select_options56427__1 = (function (coll){return select_options56427.call(null,coll,null);
});
var select_options56427__2 = (function (coll,selected){var iter__4283__auto__ = (function iter__56436(s__56437){return (new cljs.core.LazySeq(null,(function (){var s__56437__$1 = s__56437;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__56437__$1);if(temp__4126__auto__)
{var s__56437__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__56437__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__56437__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__56439 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__56438 = (0);while(true){
if((i__56438 < size__4282__auto__))
{var x = cljs.core._nth.call(null,c__4281__auto__,i__56438);cljs.core.chunk_append.call(null,b__56439,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56442 = x;var text = cljs.core.nth.call(null,vec__56442,(0),null);var val = cljs.core.nth.call(null,vec__56442,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__56442,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options56427.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__56444 = (i__56438 + (1));
i__56438 = G__56444;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56439),iter__56436.call(null,cljs.core.chunk_rest.call(null,s__56437__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56439),null);
}
} else
{var x = cljs.core.first.call(null,s__56437__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__56443 = x;var text = cljs.core.nth.call(null,vec__56443,(0),null);var val = cljs.core.nth.call(null,vec__56443,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__56443,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options56427.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__56436.call(null,cljs.core.rest.call(null,s__56437__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4283__auto__.call(null,coll);
});
select_options56427 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options56427__1.call(this,coll);
case 2:
return select_options56427__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options56427.cljs$core$IFn$_invoke$arity$1 = select_options56427__1;
select_options56427.cljs$core$IFn$_invoke$arity$2 = select_options56427__2;
return select_options56427;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options56427);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down56445 = (function() {
var drop_down56445 = null;
var drop_down56445__2 = (function (name,options){return drop_down56445.call(null,name,options,null);
});
var drop_down56445__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down56445 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down56445__2.call(this,name,options);
case 3:
return drop_down56445__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down56445.cljs$core$IFn$_invoke$arity$2 = drop_down56445__2;
drop_down56445.cljs$core$IFn$_invoke$arity$3 = drop_down56445__3;
return drop_down56445;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down56445);
/**
* Creates a text area element.
*/
sablono.core.text_area56446 = (function() {
var text_area56446 = null;
var text_area56446__1 = (function (name){return text_area56446.call(null,name,null);
});
var text_area56446__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area56446 = function(name,value){
switch(arguments.length){
case 1:
return text_area56446__1.call(this,name);
case 2:
return text_area56446__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area56446.cljs$core$IFn$_invoke$arity$1 = text_area56446__1;
text_area56446.cljs$core$IFn$_invoke$arity$2 = text_area56446__2;
return text_area56446;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area56446);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label56447 = (function label56447(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label56447);
/**
* Creates a submit button.
*/
sablono.core.submit_button56448 = (function submit_button56448(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button56448);
/**
* Creates a form reset button.
*/
sablono.core.reset_button56449 = (function reset_button56449(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button56449);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to56450 = (function() { 
var form_to56450__delegate = function (p__56451,body){var vec__56453 = p__56451;var method = cljs.core.nth.call(null,vec__56453,(0),null);var action = cljs.core.nth.call(null,vec__56453,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to56450 = function (p__56451,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to56450__delegate.call(this,p__56451,body);};
form_to56450.cljs$lang$maxFixedArity = 1;
form_to56450.cljs$lang$applyTo = (function (arglist__56454){
var p__56451 = cljs.core.first(arglist__56454);
var body = cljs.core.rest(arglist__56454);
return form_to56450__delegate(p__56451,body);
});
form_to56450.cljs$core$IFn$_invoke$arity$variadic = form_to56450__delegate;
return form_to56450;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to56450);

//# sourceMappingURL=core.js.map