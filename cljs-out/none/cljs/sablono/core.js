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
var G__91157__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__91156 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__91156,(0),null);var body = cljs.core.nthnext.call(null,vec__91156,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__91157 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__91157__delegate.call(this,args);};
G__91157.cljs$lang$maxFixedArity = 0;
G__91157.cljs$lang$applyTo = (function (arglist__91158){
var args = cljs.core.seq(arglist__91158);
return G__91157__delegate(args);
});
G__91157.cljs$core$IFn$_invoke$arity$variadic = G__91157__delegate;
return G__91157;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4375__auto__ = (function iter__91163(s__91164){return (new cljs.core.LazySeq(null,(function (){var s__91164__$1 = s__91164;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91164__$1);if(temp__4126__auto__)
{var s__91164__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91164__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91164__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91166 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91165 = (0);while(true){
if((i__91165 < size__4374__auto__))
{var args = cljs.core._nth.call(null,c__4373__auto__,i__91165);cljs.core.chunk_append.call(null,b__91166,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__91167 = (i__91165 + (1));
i__91165 = G__91167;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91166),iter__91163.call(null,cljs.core.chunk_rest.call(null,s__91164__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91166),null);
}
} else
{var args = cljs.core.first.call(null,s__91164__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__91163.call(null,cljs.core.rest.call(null,s__91164__$2)));
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
var include_css__delegate = function (styles){var iter__4375__auto__ = (function iter__91172(s__91173){return (new cljs.core.LazySeq(null,(function (){var s__91173__$1 = s__91173;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91173__$1);if(temp__4126__auto__)
{var s__91173__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91173__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91173__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91175 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91174 = (0);while(true){
if((i__91174 < size__4374__auto__))
{var style = cljs.core._nth.call(null,c__4373__auto__,i__91174);cljs.core.chunk_append.call(null,b__91175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__91176 = (i__91174 + (1));
i__91174 = G__91176;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91175),iter__91172.call(null,cljs.core.chunk_rest.call(null,s__91173__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91175),null);
}
} else
{var style = cljs.core.first.call(null,s__91173__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__91172.call(null,cljs.core.rest.call(null,s__91173__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__91177){
var styles = cljs.core.seq(arglist__91177);
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
sablono.core.link_to91178 = (function() { 
var link_to91178__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to91178 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to91178__delegate.call(this,url,content);};
link_to91178.cljs$lang$maxFixedArity = 1;
link_to91178.cljs$lang$applyTo = (function (arglist__91179){
var url = cljs.core.first(arglist__91179);
var content = cljs.core.rest(arglist__91179);
return link_to91178__delegate(url,content);
});
link_to91178.cljs$core$IFn$_invoke$arity$variadic = link_to91178__delegate;
return link_to91178;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to91178);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to91180 = (function() { 
var mail_to91180__delegate = function (e_mail,p__91181){var vec__91183 = p__91181;var content = cljs.core.nth.call(null,vec__91183,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3637__auto__ = content;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to91180 = function (e_mail,var_args){
var p__91181 = null;if (arguments.length > 1) {
  p__91181 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to91180__delegate.call(this,e_mail,p__91181);};
mail_to91180.cljs$lang$maxFixedArity = 1;
mail_to91180.cljs$lang$applyTo = (function (arglist__91184){
var e_mail = cljs.core.first(arglist__91184);
var p__91181 = cljs.core.rest(arglist__91184);
return mail_to91180__delegate(e_mail,p__91181);
});
mail_to91180.cljs$core$IFn$_invoke$arity$variadic = mail_to91180__delegate;
return mail_to91180;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to91180);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list91185 = (function unordered_list91185(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4375__auto__ = (function iter__91190(s__91191){return (new cljs.core.LazySeq(null,(function (){var s__91191__$1 = s__91191;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91191__$1);if(temp__4126__auto__)
{var s__91191__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91191__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91191__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91193 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91192 = (0);while(true){
if((i__91192 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__91192);cljs.core.chunk_append.call(null,b__91193,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__91194 = (i__91192 + (1));
i__91192 = G__91194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91193),iter__91190.call(null,cljs.core.chunk_rest.call(null,s__91191__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91193),null);
}
} else
{var x = cljs.core.first.call(null,s__91191__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__91190.call(null,cljs.core.rest.call(null,s__91191__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list91185);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list91195 = (function ordered_list91195(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4375__auto__ = (function iter__91200(s__91201){return (new cljs.core.LazySeq(null,(function (){var s__91201__$1 = s__91201;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91201__$1);if(temp__4126__auto__)
{var s__91201__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91201__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91201__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91203 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91202 = (0);while(true){
if((i__91202 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__91202);cljs.core.chunk_append.call(null,b__91203,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__91204 = (i__91202 + (1));
i__91202 = G__91204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91203),iter__91200.call(null,cljs.core.chunk_rest.call(null,s__91201__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91203),null);
}
} else
{var x = cljs.core.first.call(null,s__91201__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__91200.call(null,cljs.core.rest.call(null,s__91201__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list91195);
/**
* Create an image element.
*/
sablono.core.image91205 = (function() {
var image91205 = null;
var image91205__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image91205__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image91205 = function(src,alt){
switch(arguments.length){
case 1:
return image91205__1.call(this,src);
case 2:
return image91205__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image91205.cljs$core$IFn$_invoke$arity$1 = image91205__1;
image91205.cljs$core$IFn$_invoke$arity$2 = image91205__2;
return image91205;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image91205);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__91206_SHARP_,p2__91207_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__91206_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__91207_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__91208_SHARP_,p2__91209_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__91208_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__91209_SHARP_));
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
sablono.core.color_field91210 = (function() {
var color_field91210 = null;
var color_field91210__1 = (function (name__11139__auto__){return color_field91210.call(null,name__11139__auto__,null);
});
var color_field91210__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))),name__11139__auto__,value__11140__auto__);
});
color_field91210 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return color_field91210__1.call(this,name__11139__auto__);
case 2:
return color_field91210__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field91210.cljs$core$IFn$_invoke$arity$1 = color_field91210__1;
color_field91210.cljs$core$IFn$_invoke$arity$2 = color_field91210__2;
return color_field91210;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field91210);
/**
* Creates a date input field.
*/
sablono.core.date_field91211 = (function() {
var date_field91211 = null;
var date_field91211__1 = (function (name__11139__auto__){return date_field91211.call(null,name__11139__auto__,null);
});
var date_field91211__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))),name__11139__auto__,value__11140__auto__);
});
date_field91211 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return date_field91211__1.call(this,name__11139__auto__);
case 2:
return date_field91211__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field91211.cljs$core$IFn$_invoke$arity$1 = date_field91211__1;
date_field91211.cljs$core$IFn$_invoke$arity$2 = date_field91211__2;
return date_field91211;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field91211);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field91212 = (function() {
var datetime_field91212 = null;
var datetime_field91212__1 = (function (name__11139__auto__){return datetime_field91212.call(null,name__11139__auto__,null);
});
var datetime_field91212__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))),name__11139__auto__,value__11140__auto__);
});
datetime_field91212 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_field91212__1.call(this,name__11139__auto__);
case 2:
return datetime_field91212__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field91212.cljs$core$IFn$_invoke$arity$1 = datetime_field91212__1;
datetime_field91212.cljs$core$IFn$_invoke$arity$2 = datetime_field91212__2;
return datetime_field91212;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field91212);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field91213 = (function() {
var datetime_local_field91213 = null;
var datetime_local_field91213__1 = (function (name__11139__auto__){return datetime_local_field91213.call(null,name__11139__auto__,null);
});
var datetime_local_field91213__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))),name__11139__auto__,value__11140__auto__);
});
datetime_local_field91213 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return datetime_local_field91213__1.call(this,name__11139__auto__);
case 2:
return datetime_local_field91213__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field91213.cljs$core$IFn$_invoke$arity$1 = datetime_local_field91213__1;
datetime_local_field91213.cljs$core$IFn$_invoke$arity$2 = datetime_local_field91213__2;
return datetime_local_field91213;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field91213);
/**
* Creates a email input field.
*/
sablono.core.email_field91214 = (function() {
var email_field91214 = null;
var email_field91214__1 = (function (name__11139__auto__){return email_field91214.call(null,name__11139__auto__,null);
});
var email_field91214__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))),name__11139__auto__,value__11140__auto__);
});
email_field91214 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return email_field91214__1.call(this,name__11139__auto__);
case 2:
return email_field91214__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field91214.cljs$core$IFn$_invoke$arity$1 = email_field91214__1;
email_field91214.cljs$core$IFn$_invoke$arity$2 = email_field91214__2;
return email_field91214;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field91214);
/**
* Creates a file input field.
*/
sablono.core.file_field91215 = (function() {
var file_field91215 = null;
var file_field91215__1 = (function (name__11139__auto__){return file_field91215.call(null,name__11139__auto__,null);
});
var file_field91215__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))),name__11139__auto__,value__11140__auto__);
});
file_field91215 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return file_field91215__1.call(this,name__11139__auto__);
case 2:
return file_field91215__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field91215.cljs$core$IFn$_invoke$arity$1 = file_field91215__1;
file_field91215.cljs$core$IFn$_invoke$arity$2 = file_field91215__2;
return file_field91215;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field91215);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field91216 = (function() {
var hidden_field91216 = null;
var hidden_field91216__1 = (function (name__11139__auto__){return hidden_field91216.call(null,name__11139__auto__,null);
});
var hidden_field91216__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))),name__11139__auto__,value__11140__auto__);
});
hidden_field91216 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return hidden_field91216__1.call(this,name__11139__auto__);
case 2:
return hidden_field91216__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field91216.cljs$core$IFn$_invoke$arity$1 = hidden_field91216__1;
hidden_field91216.cljs$core$IFn$_invoke$arity$2 = hidden_field91216__2;
return hidden_field91216;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field91216);
/**
* Creates a month input field.
*/
sablono.core.month_field91217 = (function() {
var month_field91217 = null;
var month_field91217__1 = (function (name__11139__auto__){return month_field91217.call(null,name__11139__auto__,null);
});
var month_field91217__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))),name__11139__auto__,value__11140__auto__);
});
month_field91217 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return month_field91217__1.call(this,name__11139__auto__);
case 2:
return month_field91217__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field91217.cljs$core$IFn$_invoke$arity$1 = month_field91217__1;
month_field91217.cljs$core$IFn$_invoke$arity$2 = month_field91217__2;
return month_field91217;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field91217);
/**
* Creates a number input field.
*/
sablono.core.number_field91218 = (function() {
var number_field91218 = null;
var number_field91218__1 = (function (name__11139__auto__){return number_field91218.call(null,name__11139__auto__,null);
});
var number_field91218__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))),name__11139__auto__,value__11140__auto__);
});
number_field91218 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return number_field91218__1.call(this,name__11139__auto__);
case 2:
return number_field91218__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field91218.cljs$core$IFn$_invoke$arity$1 = number_field91218__1;
number_field91218.cljs$core$IFn$_invoke$arity$2 = number_field91218__2;
return number_field91218;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field91218);
/**
* Creates a password input field.
*/
sablono.core.password_field91219 = (function() {
var password_field91219 = null;
var password_field91219__1 = (function (name__11139__auto__){return password_field91219.call(null,name__11139__auto__,null);
});
var password_field91219__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))),name__11139__auto__,value__11140__auto__);
});
password_field91219 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return password_field91219__1.call(this,name__11139__auto__);
case 2:
return password_field91219__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field91219.cljs$core$IFn$_invoke$arity$1 = password_field91219__1;
password_field91219.cljs$core$IFn$_invoke$arity$2 = password_field91219__2;
return password_field91219;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field91219);
/**
* Creates a range input field.
*/
sablono.core.range_field91220 = (function() {
var range_field91220 = null;
var range_field91220__1 = (function (name__11139__auto__){return range_field91220.call(null,name__11139__auto__,null);
});
var range_field91220__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))),name__11139__auto__,value__11140__auto__);
});
range_field91220 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return range_field91220__1.call(this,name__11139__auto__);
case 2:
return range_field91220__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field91220.cljs$core$IFn$_invoke$arity$1 = range_field91220__1;
range_field91220.cljs$core$IFn$_invoke$arity$2 = range_field91220__2;
return range_field91220;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field91220);
/**
* Creates a search input field.
*/
sablono.core.search_field91221 = (function() {
var search_field91221 = null;
var search_field91221__1 = (function (name__11139__auto__){return search_field91221.call(null,name__11139__auto__,null);
});
var search_field91221__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))),name__11139__auto__,value__11140__auto__);
});
search_field91221 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return search_field91221__1.call(this,name__11139__auto__);
case 2:
return search_field91221__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field91221.cljs$core$IFn$_invoke$arity$1 = search_field91221__1;
search_field91221.cljs$core$IFn$_invoke$arity$2 = search_field91221__2;
return search_field91221;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field91221);
/**
* Creates a tel input field.
*/
sablono.core.tel_field91222 = (function() {
var tel_field91222 = null;
var tel_field91222__1 = (function (name__11139__auto__){return tel_field91222.call(null,name__11139__auto__,null);
});
var tel_field91222__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))),name__11139__auto__,value__11140__auto__);
});
tel_field91222 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return tel_field91222__1.call(this,name__11139__auto__);
case 2:
return tel_field91222__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field91222.cljs$core$IFn$_invoke$arity$1 = tel_field91222__1;
tel_field91222.cljs$core$IFn$_invoke$arity$2 = tel_field91222__2;
return tel_field91222;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field91222);
/**
* Creates a text input field.
*/
sablono.core.text_field91223 = (function() {
var text_field91223 = null;
var text_field91223__1 = (function (name__11139__auto__){return text_field91223.call(null,name__11139__auto__,null);
});
var text_field91223__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))),name__11139__auto__,value__11140__auto__);
});
text_field91223 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return text_field91223__1.call(this,name__11139__auto__);
case 2:
return text_field91223__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field91223.cljs$core$IFn$_invoke$arity$1 = text_field91223__1;
text_field91223.cljs$core$IFn$_invoke$arity$2 = text_field91223__2;
return text_field91223;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field91223);
/**
* Creates a time input field.
*/
sablono.core.time_field91224 = (function() {
var time_field91224 = null;
var time_field91224__1 = (function (name__11139__auto__){return time_field91224.call(null,name__11139__auto__,null);
});
var time_field91224__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))),name__11139__auto__,value__11140__auto__);
});
time_field91224 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return time_field91224__1.call(this,name__11139__auto__);
case 2:
return time_field91224__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field91224.cljs$core$IFn$_invoke$arity$1 = time_field91224__1;
time_field91224.cljs$core$IFn$_invoke$arity$2 = time_field91224__2;
return time_field91224;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field91224);
/**
* Creates a url input field.
*/
sablono.core.url_field91225 = (function() {
var url_field91225 = null;
var url_field91225__1 = (function (name__11139__auto__){return url_field91225.call(null,name__11139__auto__,null);
});
var url_field91225__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))),name__11139__auto__,value__11140__auto__);
});
url_field91225 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return url_field91225__1.call(this,name__11139__auto__);
case 2:
return url_field91225__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field91225.cljs$core$IFn$_invoke$arity$1 = url_field91225__1;
url_field91225.cljs$core$IFn$_invoke$arity$2 = url_field91225__2;
return url_field91225;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field91225);
/**
* Creates a week input field.
*/
sablono.core.week_field91226 = (function() {
var week_field91226 = null;
var week_field91226__1 = (function (name__11139__auto__){return week_field91226.call(null,name__11139__auto__,null);
});
var week_field91226__2 = (function (name__11139__auto__,value__11140__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))),name__11139__auto__,value__11140__auto__);
});
week_field91226 = function(name__11139__auto__,value__11140__auto__){
switch(arguments.length){
case 1:
return week_field91226__1.call(this,name__11139__auto__);
case 2:
return week_field91226__2.call(this,name__11139__auto__,value__11140__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field91226.cljs$core$IFn$_invoke$arity$1 = week_field91226__1;
week_field91226.cljs$core$IFn$_invoke$arity$2 = week_field91226__2;
return week_field91226;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field91226);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box91227 = (function() {
var check_box91227 = null;
var check_box91227__1 = (function (name){return check_box91227.call(null,name,null);
});
var check_box91227__2 = (function (name,checked_QMARK_){return check_box91227.call(null,name,checked_QMARK_,"true");
});
var check_box91227__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box91227 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box91227__1.call(this,name);
case 2:
return check_box91227__2.call(this,name,checked_QMARK_);
case 3:
return check_box91227__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box91227.cljs$core$IFn$_invoke$arity$1 = check_box91227__1;
check_box91227.cljs$core$IFn$_invoke$arity$2 = check_box91227__2;
check_box91227.cljs$core$IFn$_invoke$arity$3 = check_box91227__3;
return check_box91227;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box91227);
/**
* Creates a radio button.
*/
sablono.core.radio_button91228 = (function() {
var radio_button91228 = null;
var radio_button91228__1 = (function (group){return radio_button91228.call(null,group,null);
});
var radio_button91228__2 = (function (group,checked_QMARK_){return radio_button91228.call(null,group,checked_QMARK_,"true");
});
var radio_button91228__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button91228 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button91228__1.call(this,group);
case 2:
return radio_button91228__2.call(this,group,checked_QMARK_);
case 3:
return radio_button91228__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button91228.cljs$core$IFn$_invoke$arity$1 = radio_button91228__1;
radio_button91228.cljs$core$IFn$_invoke$arity$2 = radio_button91228__2;
radio_button91228.cljs$core$IFn$_invoke$arity$3 = radio_button91228__3;
return radio_button91228;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button91228);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options91229 = (function() {
var select_options91229 = null;
var select_options91229__1 = (function (coll){return select_options91229.call(null,coll,null);
});
var select_options91229__2 = (function (coll,selected){var iter__4375__auto__ = (function iter__91238(s__91239){return (new cljs.core.LazySeq(null,(function (){var s__91239__$1 = s__91239;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__91239__$1);if(temp__4126__auto__)
{var s__91239__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__91239__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__91239__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__91241 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__91240 = (0);while(true){
if((i__91240 < size__4374__auto__))
{var x = cljs.core._nth.call(null,c__4373__auto__,i__91240);cljs.core.chunk_append.call(null,b__91241,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__91244 = x;var text = cljs.core.nth.call(null,vec__91244,(0),null);var val = cljs.core.nth.call(null,vec__91244,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__91244,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options91229.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__91246 = (i__91240 + (1));
i__91240 = G__91246;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91241),iter__91238.call(null,cljs.core.chunk_rest.call(null,s__91239__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__91241),null);
}
} else
{var x = cljs.core.first.call(null,s__91239__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__91245 = x;var text = cljs.core.nth.call(null,vec__91245,(0),null);var val = cljs.core.nth.call(null,vec__91245,(1),null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__91245,(2),null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options91229.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__91238.call(null,cljs.core.rest.call(null,s__91239__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4375__auto__.call(null,coll);
});
select_options91229 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options91229__1.call(this,coll);
case 2:
return select_options91229__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options91229.cljs$core$IFn$_invoke$arity$1 = select_options91229__1;
select_options91229.cljs$core$IFn$_invoke$arity$2 = select_options91229__2;
return select_options91229;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options91229);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down91247 = (function() {
var drop_down91247 = null;
var drop_down91247__2 = (function (name,options){return drop_down91247.call(null,name,options,null);
});
var drop_down91247__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down91247 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down91247__2.call(this,name,options);
case 3:
return drop_down91247__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down91247.cljs$core$IFn$_invoke$arity$2 = drop_down91247__2;
drop_down91247.cljs$core$IFn$_invoke$arity$3 = drop_down91247__3;
return drop_down91247;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down91247);
/**
* Creates a text area element.
*/
sablono.core.text_area91248 = (function() {
var text_area91248 = null;
var text_area91248__1 = (function (name){return text_area91248.call(null,name,null);
});
var text_area91248__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area91248 = function(name,value){
switch(arguments.length){
case 1:
return text_area91248__1.call(this,name);
case 2:
return text_area91248__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area91248.cljs$core$IFn$_invoke$arity$1 = text_area91248__1;
text_area91248.cljs$core$IFn$_invoke$arity$2 = text_area91248__2;
return text_area91248;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area91248);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label91249 = (function label91249(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label91249);
/**
* Creates a submit button.
*/
sablono.core.submit_button91250 = (function submit_button91250(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button91250);
/**
* Creates a form reset button.
*/
sablono.core.reset_button91251 = (function reset_button91251(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button91251);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to91252 = (function() { 
var form_to91252__delegate = function (p__91253,body){var vec__91255 = p__91253;var method = cljs.core.nth.call(null,vec__91255,(0),null);var action = cljs.core.nth.call(null,vec__91255,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to91252 = function (p__91253,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to91252__delegate.call(this,p__91253,body);};
form_to91252.cljs$lang$maxFixedArity = 1;
form_to91252.cljs$lang$applyTo = (function (arglist__91256){
var p__91253 = cljs.core.first(arglist__91256);
var body = cljs.core.rest(arglist__91256);
return form_to91252__delegate(p__91253,body);
});
form_to91252.cljs$core$IFn$_invoke$arity$variadic = form_to91252__delegate;
return form_to91252;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to91252);

//# sourceMappingURL=core.js.map