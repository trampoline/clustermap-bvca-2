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
var G__85222__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__85221 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__85221,(0),null);var body = cljs.core.nthnext.call(null,vec__85221,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__85222 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__85222__delegate.call(this,args);};
G__85222.cljs$lang$maxFixedArity = 0;
G__85222.cljs$lang$applyTo = (function (arglist__85223){
var args = cljs.core.seq(arglist__85223);
return G__85222__delegate(args);
});
G__85222.cljs$core$IFn$_invoke$arity$variadic = G__85222__delegate;
return G__85222;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__85228(s__85229){return (new cljs.core.LazySeq(null,(function (){var s__85229__$1 = s__85229;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85229__$1);if(temp__4126__auto__)
{var s__85229__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85229__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85229__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85231 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85230 = (0);while(true){
if((i__85230 < size__4374__auto__))
{var args = cljs.core._nth.call(null,c__4373__auto__,i__85230);cljs.core.chunk_append.call(null,b__85231,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__85232 = (i__85230 + (1));
i__85230 = G__85232;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85231),iter__85228.call(null,cljs.core.chunk_rest.call(null,s__85229__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85231),null);
}
} else
{var args = cljs.core.first.call(null,s__85229__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__85228.call(null,cljs.core.rest.call(null,s__85229__$2)));
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__85237(s__85238){return (new cljs.core.LazySeq(null,(function (){var s__85238__$1 = s__85238;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85238__$1);if(temp__4126__auto__)
{var s__85238__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85238__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85238__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85240 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85239 = (0);while(true){
if((i__85239 < size__4374__auto__))
{var style = cljs.core._nth.call(null,c__4373__auto__,i__85239);cljs.core.chunk_append.call(null,b__85240,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__85241 = (i__85239 + (1));
i__85239 = G__85241;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85240),iter__85237.call(null,cljs.core.chunk_rest.call(null,s__85238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85240),null);
}
} else
{var style = cljs.core.first.call(null,s__85238__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__85237.call(null,cljs.core.rest.call(null,s__85238__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__85242){
var styles = cljs.core.seq(arglist__85242);
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
sablono.core.link_to85243 = (function() { 
var link_to85243__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to85243 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to85243__delegate.call(this,url,content);};
link_to85243.cljs$lang$maxFixedArity = 1;
link_to85243.cljs$lang$applyTo = (function (arglist__85244){
var url = cljs.core.first(arglist__85244);
var content = cljs.core.rest(arglist__85244);
return link_to85243__delegate(url,content);
});
link_to85243.cljs$core$IFn$_invoke$arity$variadic = link_to85243__delegate;
return link_to85243;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to85243);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to85245 = (function() { 
var mail_to85245__delegate = function (e_mail,p__85246){var vec__85248 = p__85246;var content = cljs.core.nth.call(null,vec__85248,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to85245 = function (e_mail,var_args){
var p__85246 = null;if (arguments.length > 1) {
  p__85246 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to85245__delegate.call(this,e_mail,p__85246);};
mail_to85245.cljs$lang$maxFixedArity = 1;
mail_to85245.cljs$lang$applyTo = (function (arglist__85249){
var e_mail = cljs.core.first(arglist__85249);
var p__85246 = cljs.core.rest(arglist__85249);
return mail_to85245__delegate(e_mail,p__85246);
});
mail_to85245.cljs$core$IFn$_invoke$arity$variadic = mail_to85245__delegate;
return mail_to85245;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to85245);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list85250 = (function unordered_list85250(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4375__auto__ = (function iter__85255(s__85256){return (new cljs.core.LazySeq(null,(function (){var s__85256__$1 = s__85256;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85256__$1);if(temp__4126__auto__)
{var s__85256__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85256__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85256__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85258 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85257 = (0);while(true){
if((i__85257 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__85257);cljs.core.chunk_append.call(null,b__85258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__85259 = (i__85257 + (1));
i__85257 = G__85259;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85258),iter__85255.call(null,cljs.core.chunk_rest.call(null,s__85256__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85258),null);
}
} else
{var x = cljs.core.first.call(null,s__85256__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__85255.call(null,cljs.core.rest.call(null,s__85256__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list85250);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list85260 = (function ordered_list85260(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4375__auto__ = (function iter__85265(s__85266){return (new cljs.core.LazySeq(null,(function (){var s__85266__$1 = s__85266;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85266__$1);if(temp__4126__auto__)
{var s__85266__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85266__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85266__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85268 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85267 = (0);while(true){
if((i__85267 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__85267);cljs.core.chunk_append.call(null,b__85268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__85269 = (i__85267 + (1));
i__85267 = G__85269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85268),iter__85265.call(null,cljs.core.chunk_rest.call(null,s__85266__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85268),null);
}
} else
{var x = cljs.core.first.call(null,s__85266__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__85265.call(null,cljs.core.rest.call(null,s__85266__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list85260);
/**
* Create an image element.
*/
sablono.core.image85270 = (function() {
var image85270 = null;
var image85270__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image85270__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image85270 = function(src,alt){
switch(arguments.length){
case 1:
return image85270__1.call(this,src);
case 2:
return image85270__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image85270.cljs$core$IFn$_invoke$arity$1 = image85270__1;
image85270.cljs$core$IFn$_invoke$arity$2 = image85270__2;
return image85270;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image85270);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__85271_SHARP_,p2__85272_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__85271_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__85272_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__85273_SHARP_,p2__85274_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__85273_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__85274_SHARP_));
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
sablono.core.color_field85275 = (function() {
var color_field85275 = null;
var color_field85275__1 = (function (name__11139__auto__){return color_field85275.call(null,name__11139__auto__,null);
});
var color_field85275__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field85275 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field85275__1.call(this,name__11139__auto__);
case 2:
return color_field85275__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field85275.cljs$core$IFn$_invoke$arity$1 = color_field85275__1;
color_field85275.cljs$core$IFn$_invoke$arity$2 = color_field85275__2;
return color_field85275;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field85275);
/**
* Creates a date input field.
*/
sablono.core.date_field85276 = (function() {
var date_field85276 = null;
var date_field85276__1 = (function (name__11139__auto__){return date_field85276.call(null,name__11139__auto__,null);
});
var date_field85276__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field85276 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field85276__1.call(this,name__11139__auto__);
case 2:
return date_field85276__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field85276.cljs$core$IFn$_invoke$arity$1 = date_field85276__1;
date_field85276.cljs$core$IFn$_invoke$arity$2 = date_field85276__2;
return date_field85276;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field85276);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field85277 = (function() {
var datetime_field85277 = null;
var datetime_field85277__1 = (function (name__11139__auto__){return datetime_field85277.call(null,name__11139__auto__,null);
});
var datetime_field85277__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field85277 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field85277__1.call(this,name__11139__auto__);
case 2:
return datetime_field85277__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field85277.cljs$core$IFn$_invoke$arity$1 = datetime_field85277__1;
datetime_field85277.cljs$core$IFn$_invoke$arity$2 = datetime_field85277__2;
return datetime_field85277;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field85277);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field85278 = (function() {
var datetime_local_field85278 = null;
var datetime_local_field85278__1 = (function (name__11139__auto__){return datetime_local_field85278.call(null,name__11139__auto__,null);
});
var datetime_local_field85278__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field85278 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field85278__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field85278__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field85278.cljs$core$IFn$_invoke$arity$1 = datetime_local_field85278__1;
datetime_local_field85278.cljs$core$IFn$_invoke$arity$2 = datetime_local_field85278__2;
return datetime_local_field85278;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field85278);
/**
* Creates a email input field.
*/
sablono.core.email_field85279 = (function() {
var email_field85279 = null;
var email_field85279__1 = (function (name__11139__auto__){return email_field85279.call(null,name__11139__auto__,null);
});
var email_field85279__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field85279 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field85279__1.call(this,name__11139__auto__);
case 2:
return email_field85279__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field85279.cljs$core$IFn$_invoke$arity$1 = email_field85279__1;
email_field85279.cljs$core$IFn$_invoke$arity$2 = email_field85279__2;
return email_field85279;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field85279);
/**
* Creates a file input field.
*/
sablono.core.file_field85280 = (function() {
var file_field85280 = null;
var file_field85280__1 = (function (name__11139__auto__){return file_field85280.call(null,name__11139__auto__,null);
});
var file_field85280__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field85280 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field85280__1.call(this,name__11139__auto__);
case 2:
return file_field85280__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field85280.cljs$core$IFn$_invoke$arity$1 = file_field85280__1;
file_field85280.cljs$core$IFn$_invoke$arity$2 = file_field85280__2;
return file_field85280;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field85280);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field85281 = (function() {
var hidden_field85281 = null;
var hidden_field85281__1 = (function (name__11139__auto__){return hidden_field85281.call(null,name__11139__auto__,null);
});
var hidden_field85281__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field85281 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field85281__1.call(this,name__11139__auto__);
case 2:
return hidden_field85281__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field85281.cljs$core$IFn$_invoke$arity$1 = hidden_field85281__1;
hidden_field85281.cljs$core$IFn$_invoke$arity$2 = hidden_field85281__2;
return hidden_field85281;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field85281);
/**
* Creates a month input field.
*/
sablono.core.month_field85282 = (function() {
var month_field85282 = null;
var month_field85282__1 = (function (name__11139__auto__){return month_field85282.call(null,name__11139__auto__,null);
});
var month_field85282__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field85282 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field85282__1.call(this,name__11139__auto__);
case 2:
return month_field85282__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field85282.cljs$core$IFn$_invoke$arity$1 = month_field85282__1;
month_field85282.cljs$core$IFn$_invoke$arity$2 = month_field85282__2;
return month_field85282;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field85282);
/**
* Creates a number input field.
*/
sablono.core.number_field85283 = (function() {
var number_field85283 = null;
var number_field85283__1 = (function (name__11139__auto__){return number_field85283.call(null,name__11139__auto__,null);
});
var number_field85283__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field85283 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field85283__1.call(this,name__11139__auto__);
case 2:
return number_field85283__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field85283.cljs$core$IFn$_invoke$arity$1 = number_field85283__1;
number_field85283.cljs$core$IFn$_invoke$arity$2 = number_field85283__2;
return number_field85283;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field85283);
/**
* Creates a password input field.
*/
sablono.core.password_field85284 = (function() {
var password_field85284 = null;
var password_field85284__1 = (function (name__11139__auto__){return password_field85284.call(null,name__11139__auto__,null);
});
var password_field85284__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field85284 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field85284__1.call(this,name__11139__auto__);
case 2:
return password_field85284__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field85284.cljs$core$IFn$_invoke$arity$1 = password_field85284__1;
password_field85284.cljs$core$IFn$_invoke$arity$2 = password_field85284__2;
return password_field85284;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field85284);
/**
* Creates a range input field.
*/
sablono.core.range_field85285 = (function() {
var range_field85285 = null;
var range_field85285__1 = (function (name__11139__auto__){return range_field85285.call(null,name__11139__auto__,null);
});
var range_field85285__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field85285 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field85285__1.call(this,name__11139__auto__);
case 2:
return range_field85285__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field85285.cljs$core$IFn$_invoke$arity$1 = range_field85285__1;
range_field85285.cljs$core$IFn$_invoke$arity$2 = range_field85285__2;
return range_field85285;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field85285);
/**
* Creates a search input field.
*/
sablono.core.search_field85286 = (function() {
var search_field85286 = null;
var search_field85286__1 = (function (name__11139__auto__){return search_field85286.call(null,name__11139__auto__,null);
});
var search_field85286__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field85286 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field85286__1.call(this,name__11139__auto__);
case 2:
return search_field85286__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field85286.cljs$core$IFn$_invoke$arity$1 = search_field85286__1;
search_field85286.cljs$core$IFn$_invoke$arity$2 = search_field85286__2;
return search_field85286;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field85286);
/**
* Creates a tel input field.
*/
sablono.core.tel_field85287 = (function() {
var tel_field85287 = null;
var tel_field85287__1 = (function (name__11139__auto__){return tel_field85287.call(null,name__11139__auto__,null);
});
var tel_field85287__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field85287 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field85287__1.call(this,name__11139__auto__);
case 2:
return tel_field85287__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field85287.cljs$core$IFn$_invoke$arity$1 = tel_field85287__1;
tel_field85287.cljs$core$IFn$_invoke$arity$2 = tel_field85287__2;
return tel_field85287;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field85287);
/**
* Creates a text input field.
*/
sablono.core.text_field85288 = (function() {
var text_field85288 = null;
var text_field85288__1 = (function (name__11139__auto__){return text_field85288.call(null,name__11139__auto__,null);
});
var text_field85288__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field85288 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field85288__1.call(this,name__11139__auto__);
case 2:
return text_field85288__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field85288.cljs$core$IFn$_invoke$arity$1 = text_field85288__1;
text_field85288.cljs$core$IFn$_invoke$arity$2 = text_field85288__2;
return text_field85288;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field85288);
/**
* Creates a time input field.
*/
sablono.core.time_field85289 = (function() {
var time_field85289 = null;
var time_field85289__1 = (function (name__11139__auto__){return time_field85289.call(null,name__11139__auto__,null);
});
var time_field85289__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field85289 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field85289__1.call(this,name__11139__auto__);
case 2:
return time_field85289__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field85289.cljs$core$IFn$_invoke$arity$1 = time_field85289__1;
time_field85289.cljs$core$IFn$_invoke$arity$2 = time_field85289__2;
return time_field85289;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field85289);
/**
* Creates a url input field.
*/
sablono.core.url_field85290 = (function() {
var url_field85290 = null;
var url_field85290__1 = (function (name__11139__auto__){return url_field85290.call(null,name__11139__auto__,null);
});
var url_field85290__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field85290 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field85290__1.call(this,name__11139__auto__);
case 2:
return url_field85290__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field85290.cljs$core$IFn$_invoke$arity$1 = url_field85290__1;
url_field85290.cljs$core$IFn$_invoke$arity$2 = url_field85290__2;
return url_field85290;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field85290);
/**
* Creates a week input field.
*/
sablono.core.week_field85291 = (function() {
var week_field85291 = null;
var week_field85291__1 = (function (name__11139__auto__){return week_field85291.call(null,name__11139__auto__,null);
});
var week_field85291__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field85291 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field85291__1.call(this,name__11139__auto__);
case 2:
return week_field85291__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field85291.cljs$core$IFn$_invoke$arity$1 = week_field85291__1;
week_field85291.cljs$core$IFn$_invoke$arity$2 = week_field85291__2;
return week_field85291;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field85291);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box85292 = (function() {
var check_box85292 = null;
var check_box85292__1 = (function (name){return check_box85292.call(null,name,null);
});
var check_box85292__2 = (function (name,checked_QMARK_){return check_box85292.call(null,name,checked_QMARK_,"true");
});
var check_box85292__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box85292 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box85292__1.call(this,name);
case 2:
return check_box85292__2.call(this,name,checked_QMARK_);
case 3:
return check_box85292__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box85292.cljs$core$IFn$_invoke$arity$1 = check_box85292__1;
check_box85292.cljs$core$IFn$_invoke$arity$2 = check_box85292__2;
check_box85292.cljs$core$IFn$_invoke$arity$3 = check_box85292__3;
return check_box85292;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box85292);
/**
* Creates a radio button.
*/
sablono.core.radio_button85293 = (function() {
var radio_button85293 = null;
var radio_button85293__1 = (function (group){return radio_button85293.call(null,group,null);
});
var radio_button85293__2 = (function (group,checked_QMARK_){return radio_button85293.call(null,group,checked_QMARK_,"true");
});
var radio_button85293__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button85293 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button85293__1.call(this,group);
case 2:
return radio_button85293__2.call(this,group,checked_QMARK_);
case 3:
return radio_button85293__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button85293.cljs$core$IFn$_invoke$arity$1 = radio_button85293__1;
radio_button85293.cljs$core$IFn$_invoke$arity$2 = radio_button85293__2;
radio_button85293.cljs$core$IFn$_invoke$arity$3 = radio_button85293__3;
return radio_button85293;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button85293);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options85294 = (function() {
var select_options85294 = null;
var select_options85294__1 = (function (coll){return select_options85294.call(null,coll,null);
});
var select_options85294__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__85303(s__85304){return (new cljs.core.LazySeq(null,(function (){var s__85304__$1 = s__85304;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__85304__$1);if(temp__4126__auto__)
{var s__85304__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__85304__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__85304__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__85306 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__85305 = (0);while(true){
if((i__85305 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__85305);cljs.core.chunk_append.call(null,b__85306,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__85309 = x;var text = cljs.core.nth.call(null,vec__85309,(0),null);var val = cljs.core.nth.call(null,vec__85309,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__85309,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options85294.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__85311 = (i__85305 + (1));
i__85305 = G__85311;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85306),iter__85303.call(null,cljs.core.chunk_rest.call(null,s__85304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85306),null);
}
} else
{var x = cljs.core.first.call(null,s__85304__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__85310 = x;var text = cljs.core.nth.call(null,vec__85310,(0),null);var val = cljs.core.nth.call(null,vec__85310,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__85310,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options85294.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__85303.call(null,cljs.core.rest.call(null,s__85304__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
});
select_options85294 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options85294__1.call(this,coll);
case 2:
return select_options85294__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options85294.cljs$core$IFn$_invoke$arity$1 = select_options85294__1;
select_options85294.cljs$core$IFn$_invoke$arity$2 = select_options85294__2;
return select_options85294;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options85294);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down85312 = (function() {
var drop_down85312 = null;
var drop_down85312__2 = (function (name,options){return drop_down85312.call(null,name,options,null);
});
var drop_down85312__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down85312 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down85312__2.call(this,name,options);
case 3:
return drop_down85312__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down85312.cljs$core$IFn$_invoke$arity$2 = drop_down85312__2;
drop_down85312.cljs$core$IFn$_invoke$arity$3 = drop_down85312__3;
return drop_down85312;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down85312);
/**
* Creates a text area element.
*/
sablono.core.text_area85313 = (function() {
var text_area85313 = null;
var text_area85313__1 = (function (name){return text_area85313.call(null,name,null);
});
var text_area85313__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area85313 = function(name,value){
switch(arguments.length){
case 1:
return text_area85313__1.call(this,name);
case 2:
return text_area85313__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area85313.cljs$core$IFn$_invoke$arity$1 = text_area85313__1;
text_area85313.cljs$core$IFn$_invoke$arity$2 = text_area85313__2;
return text_area85313;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area85313);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label85314 = (function label85314(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label85314);
/**
* Creates a submit button.
*/
sablono.core.submit_button85315 = (function submit_button85315(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button85315);
/**
* Creates a form reset button.
*/
sablono.core.reset_button85316 = (function reset_button85316(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button85316);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to85317 = (function() { 
var form_to85317__delegate = function (p__85318,body){var vec__85320 = p__85318;var method = cljs.core.nth.call(null,vec__85320,(0),null);var action = cljs.core.nth.call(null,vec__85320,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to85317 = function (p__85318,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to85317__delegate.call(this,p__85318,body);};
form_to85317.cljs$lang$maxFixedArity = 1;
form_to85317.cljs$lang$applyTo = (function (arglist__85321){
var p__85318 = cljs.core.first(arglist__85321);
var body = cljs.core.rest(arglist__85321);
return form_to85317__delegate(p__85318,body);
});
form_to85317.cljs$core$IFn$_invoke$arity$variadic = form_to85317__delegate;
return form_to85317;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to85317);

//# sourceMappingURL=core.js.map