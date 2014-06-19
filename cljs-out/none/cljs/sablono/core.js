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
var G__28505__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__28504 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__28504,0,null);var body = cljs.core.nthnext.call(null,vec__28504,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__28505 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28505__delegate.call(this,args);};
G__28505.cljs$lang$maxFixedArity = 0;
G__28505.cljs$lang$applyTo = (function (arglist__28506){
var args = cljs.core.seq(arglist__28506);
return G__28505__delegate(args);
});
G__28505.cljs$core$IFn$_invoke$arity$variadic = G__28505__delegate;
return G__28505;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4264__auto__ = (function iter__28511(s__28512){return (new cljs.core.LazySeq(null,(function (){var s__28512__$1 = s__28512;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28512__$1);if(temp__4126__auto__)
{var s__28512__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28512__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__28512__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__28514 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__28513 = 0;while(true){
if((i__28513 < size__4263__auto__))
{var args = cljs.core._nth.call(null,c__4262__auto__,i__28513);cljs.core.chunk_append.call(null,b__28514,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__28515 = (i__28513 + 1);
i__28513 = G__28515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28514),iter__28511.call(null,cljs.core.chunk_rest.call(null,s__28512__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28514),null);
}
} else
{var args = cljs.core.first.call(null,s__28512__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__28511.call(null,cljs.core.rest.call(null,s__28512__$2)));
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
var include_css__delegate = function (styles){var iter__4264__auto__ = (function iter__28520(s__28521){return (new cljs.core.LazySeq(null,(function (){var s__28521__$1 = s__28521;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28521__$1);if(temp__4126__auto__)
{var s__28521__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28521__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__28521__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__28523 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__28522 = 0;while(true){
if((i__28522 < size__4263__auto__))
{var style = cljs.core._nth.call(null,c__4262__auto__,i__28522);cljs.core.chunk_append.call(null,b__28523,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__28524 = (i__28522 + 1);
i__28522 = G__28524;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28523),iter__28520.call(null,cljs.core.chunk_rest.call(null,s__28521__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28523),null);
}
} else
{var style = cljs.core.first.call(null,s__28521__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__28520.call(null,cljs.core.rest.call(null,s__28521__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__28525){
var styles = cljs.core.seq(arglist__28525);
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
sablono.core.link_to28526 = (function() { 
var link_to28526__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to28526 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to28526__delegate.call(this,url,content);};
link_to28526.cljs$lang$maxFixedArity = 1;
link_to28526.cljs$lang$applyTo = (function (arglist__28527){
var url = cljs.core.first(arglist__28527);
var content = cljs.core.rest(arglist__28527);
return link_to28526__delegate(url,content);
});
link_to28526.cljs$core$IFn$_invoke$arity$variadic = link_to28526__delegate;
return link_to28526;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28526);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to28528 = (function() { 
var mail_to28528__delegate = function (e_mail,p__28529){var vec__28531 = p__28529;var content = cljs.core.nth.call(null,vec__28531,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3539__auto__ = content;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to28528 = function (e_mail,var_args){
var p__28529 = null;if (arguments.length > 1) {
  p__28529 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to28528__delegate.call(this,e_mail,p__28529);};
mail_to28528.cljs$lang$maxFixedArity = 1;
mail_to28528.cljs$lang$applyTo = (function (arglist__28532){
var e_mail = cljs.core.first(arglist__28532);
var p__28529 = cljs.core.rest(arglist__28532);
return mail_to28528__delegate(e_mail,p__28529);
});
mail_to28528.cljs$core$IFn$_invoke$arity$variadic = mail_to28528__delegate;
return mail_to28528;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28528);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list28533 = (function unordered_list28533(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4264__auto__ = (function iter__28538(s__28539){return (new cljs.core.LazySeq(null,(function (){var s__28539__$1 = s__28539;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28539__$1);if(temp__4126__auto__)
{var s__28539__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28539__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__28539__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__28541 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__28540 = 0;while(true){
if((i__28540 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__28540);cljs.core.chunk_append.call(null,b__28541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28542 = (i__28540 + 1);
i__28540 = G__28542;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28541),iter__28538.call(null,cljs.core.chunk_rest.call(null,s__28539__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28541),null);
}
} else
{var x = cljs.core.first.call(null,s__28539__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28538.call(null,cljs.core.rest.call(null,s__28539__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28533);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list28543 = (function ordered_list28543(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4264__auto__ = (function iter__28548(s__28549){return (new cljs.core.LazySeq(null,(function (){var s__28549__$1 = s__28549;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28549__$1);if(temp__4126__auto__)
{var s__28549__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28549__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__28549__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__28551 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__28550 = 0;while(true){
if((i__28550 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__28550);cljs.core.chunk_append.call(null,b__28551,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28552 = (i__28550 + 1);
i__28550 = G__28552;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28551),iter__28548.call(null,cljs.core.chunk_rest.call(null,s__28549__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28551),null);
}
} else
{var x = cljs.core.first.call(null,s__28549__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28548.call(null,cljs.core.rest.call(null,s__28549__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28543);
/**
* Create an image element.
*/
sablono.core.image28553 = (function() {
var image28553 = null;
var image28553__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image28553__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image28553 = function(src,alt){
switch(arguments.length){
case 1:
return image28553__1.call(this,src);
case 2:
return image28553__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28553.cljs$core$IFn$_invoke$arity$1 = image28553__1;
image28553.cljs$core$IFn$_invoke$arity$2 = image28553__2;
return image28553;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28553);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__28554_SHARP_,p2__28555_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28554_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28555_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__28556_SHARP_,p2__28557_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28556_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28557_SHARP_));
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
sablono.core.color_field28558 = (function() {
var color_field28558 = null;
var color_field28558__1 = (function (name__10089__auto__){return color_field28558.call(null,name__10089__auto__,null);
});
var color_field28558__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10089__auto__,value__10090__auto__);
});
color_field28558 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return color_field28558__1.call(this,name__10089__auto__);
case 2:
return color_field28558__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field28558.cljs$core$IFn$_invoke$arity$1 = color_field28558__1;
color_field28558.cljs$core$IFn$_invoke$arity$2 = color_field28558__2;
return color_field28558;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28558);
/**
* Creates a date input field.
*/
sablono.core.date_field28559 = (function() {
var date_field28559 = null;
var date_field28559__1 = (function (name__10089__auto__){return date_field28559.call(null,name__10089__auto__,null);
});
var date_field28559__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10089__auto__,value__10090__auto__);
});
date_field28559 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return date_field28559__1.call(this,name__10089__auto__);
case 2:
return date_field28559__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field28559.cljs$core$IFn$_invoke$arity$1 = date_field28559__1;
date_field28559.cljs$core$IFn$_invoke$arity$2 = date_field28559__2;
return date_field28559;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28559);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field28560 = (function() {
var datetime_field28560 = null;
var datetime_field28560__1 = (function (name__10089__auto__){return datetime_field28560.call(null,name__10089__auto__,null);
});
var datetime_field28560__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10089__auto__,value__10090__auto__);
});
datetime_field28560 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_field28560__1.call(this,name__10089__auto__);
case 2:
return datetime_field28560__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field28560.cljs$core$IFn$_invoke$arity$1 = datetime_field28560__1;
datetime_field28560.cljs$core$IFn$_invoke$arity$2 = datetime_field28560__2;
return datetime_field28560;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28560);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field28561 = (function() {
var datetime_local_field28561 = null;
var datetime_local_field28561__1 = (function (name__10089__auto__){return datetime_local_field28561.call(null,name__10089__auto__,null);
});
var datetime_local_field28561__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10089__auto__,value__10090__auto__);
});
datetime_local_field28561 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return datetime_local_field28561__1.call(this,name__10089__auto__);
case 2:
return datetime_local_field28561__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field28561.cljs$core$IFn$_invoke$arity$1 = datetime_local_field28561__1;
datetime_local_field28561.cljs$core$IFn$_invoke$arity$2 = datetime_local_field28561__2;
return datetime_local_field28561;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28561);
/**
* Creates a email input field.
*/
sablono.core.email_field28562 = (function() {
var email_field28562 = null;
var email_field28562__1 = (function (name__10089__auto__){return email_field28562.call(null,name__10089__auto__,null);
});
var email_field28562__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10089__auto__,value__10090__auto__);
});
email_field28562 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return email_field28562__1.call(this,name__10089__auto__);
case 2:
return email_field28562__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28562.cljs$core$IFn$_invoke$arity$1 = email_field28562__1;
email_field28562.cljs$core$IFn$_invoke$arity$2 = email_field28562__2;
return email_field28562;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28562);
/**
* Creates a file input field.
*/
sablono.core.file_field28563 = (function() {
var file_field28563 = null;
var file_field28563__1 = (function (name__10089__auto__){return file_field28563.call(null,name__10089__auto__,null);
});
var file_field28563__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10089__auto__,value__10090__auto__);
});
file_field28563 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return file_field28563__1.call(this,name__10089__auto__);
case 2:
return file_field28563__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field28563.cljs$core$IFn$_invoke$arity$1 = file_field28563__1;
file_field28563.cljs$core$IFn$_invoke$arity$2 = file_field28563__2;
return file_field28563;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28563);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field28564 = (function() {
var hidden_field28564 = null;
var hidden_field28564__1 = (function (name__10089__auto__){return hidden_field28564.call(null,name__10089__auto__,null);
});
var hidden_field28564__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10089__auto__,value__10090__auto__);
});
hidden_field28564 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return hidden_field28564__1.call(this,name__10089__auto__);
case 2:
return hidden_field28564__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28564.cljs$core$IFn$_invoke$arity$1 = hidden_field28564__1;
hidden_field28564.cljs$core$IFn$_invoke$arity$2 = hidden_field28564__2;
return hidden_field28564;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28564);
/**
* Creates a month input field.
*/
sablono.core.month_field28565 = (function() {
var month_field28565 = null;
var month_field28565__1 = (function (name__10089__auto__){return month_field28565.call(null,name__10089__auto__,null);
});
var month_field28565__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10089__auto__,value__10090__auto__);
});
month_field28565 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return month_field28565__1.call(this,name__10089__auto__);
case 2:
return month_field28565__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field28565.cljs$core$IFn$_invoke$arity$1 = month_field28565__1;
month_field28565.cljs$core$IFn$_invoke$arity$2 = month_field28565__2;
return month_field28565;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28565);
/**
* Creates a number input field.
*/
sablono.core.number_field28566 = (function() {
var number_field28566 = null;
var number_field28566__1 = (function (name__10089__auto__){return number_field28566.call(null,name__10089__auto__,null);
});
var number_field28566__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10089__auto__,value__10090__auto__);
});
number_field28566 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return number_field28566__1.call(this,name__10089__auto__);
case 2:
return number_field28566__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field28566.cljs$core$IFn$_invoke$arity$1 = number_field28566__1;
number_field28566.cljs$core$IFn$_invoke$arity$2 = number_field28566__2;
return number_field28566;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28566);
/**
* Creates a password input field.
*/
sablono.core.password_field28567 = (function() {
var password_field28567 = null;
var password_field28567__1 = (function (name__10089__auto__){return password_field28567.call(null,name__10089__auto__,null);
});
var password_field28567__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10089__auto__,value__10090__auto__);
});
password_field28567 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return password_field28567__1.call(this,name__10089__auto__);
case 2:
return password_field28567__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28567.cljs$core$IFn$_invoke$arity$1 = password_field28567__1;
password_field28567.cljs$core$IFn$_invoke$arity$2 = password_field28567__2;
return password_field28567;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28567);
/**
* Creates a range input field.
*/
sablono.core.range_field28568 = (function() {
var range_field28568 = null;
var range_field28568__1 = (function (name__10089__auto__){return range_field28568.call(null,name__10089__auto__,null);
});
var range_field28568__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10089__auto__,value__10090__auto__);
});
range_field28568 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return range_field28568__1.call(this,name__10089__auto__);
case 2:
return range_field28568__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field28568.cljs$core$IFn$_invoke$arity$1 = range_field28568__1;
range_field28568.cljs$core$IFn$_invoke$arity$2 = range_field28568__2;
return range_field28568;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28568);
/**
* Creates a search input field.
*/
sablono.core.search_field28569 = (function() {
var search_field28569 = null;
var search_field28569__1 = (function (name__10089__auto__){return search_field28569.call(null,name__10089__auto__,null);
});
var search_field28569__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10089__auto__,value__10090__auto__);
});
search_field28569 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return search_field28569__1.call(this,name__10089__auto__);
case 2:
return search_field28569__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field28569.cljs$core$IFn$_invoke$arity$1 = search_field28569__1;
search_field28569.cljs$core$IFn$_invoke$arity$2 = search_field28569__2;
return search_field28569;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28569);
/**
* Creates a tel input field.
*/
sablono.core.tel_field28570 = (function() {
var tel_field28570 = null;
var tel_field28570__1 = (function (name__10089__auto__){return tel_field28570.call(null,name__10089__auto__,null);
});
var tel_field28570__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10089__auto__,value__10090__auto__);
});
tel_field28570 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return tel_field28570__1.call(this,name__10089__auto__);
case 2:
return tel_field28570__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field28570.cljs$core$IFn$_invoke$arity$1 = tel_field28570__1;
tel_field28570.cljs$core$IFn$_invoke$arity$2 = tel_field28570__2;
return tel_field28570;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28570);
/**
* Creates a text input field.
*/
sablono.core.text_field28571 = (function() {
var text_field28571 = null;
var text_field28571__1 = (function (name__10089__auto__){return text_field28571.call(null,name__10089__auto__,null);
});
var text_field28571__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10089__auto__,value__10090__auto__);
});
text_field28571 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return text_field28571__1.call(this,name__10089__auto__);
case 2:
return text_field28571__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28571.cljs$core$IFn$_invoke$arity$1 = text_field28571__1;
text_field28571.cljs$core$IFn$_invoke$arity$2 = text_field28571__2;
return text_field28571;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28571);
/**
* Creates a time input field.
*/
sablono.core.time_field28572 = (function() {
var time_field28572 = null;
var time_field28572__1 = (function (name__10089__auto__){return time_field28572.call(null,name__10089__auto__,null);
});
var time_field28572__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10089__auto__,value__10090__auto__);
});
time_field28572 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return time_field28572__1.call(this,name__10089__auto__);
case 2:
return time_field28572__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field28572.cljs$core$IFn$_invoke$arity$1 = time_field28572__1;
time_field28572.cljs$core$IFn$_invoke$arity$2 = time_field28572__2;
return time_field28572;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28572);
/**
* Creates a url input field.
*/
sablono.core.url_field28573 = (function() {
var url_field28573 = null;
var url_field28573__1 = (function (name__10089__auto__){return url_field28573.call(null,name__10089__auto__,null);
});
var url_field28573__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10089__auto__,value__10090__auto__);
});
url_field28573 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return url_field28573__1.call(this,name__10089__auto__);
case 2:
return url_field28573__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field28573.cljs$core$IFn$_invoke$arity$1 = url_field28573__1;
url_field28573.cljs$core$IFn$_invoke$arity$2 = url_field28573__2;
return url_field28573;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28573);
/**
* Creates a week input field.
*/
sablono.core.week_field28574 = (function() {
var week_field28574 = null;
var week_field28574__1 = (function (name__10089__auto__){return week_field28574.call(null,name__10089__auto__,null);
});
var week_field28574__2 = (function (name__10089__auto__,value__10090__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10089__auto__,value__10090__auto__);
});
week_field28574 = function(name__10089__auto__,value__10090__auto__){
switch(arguments.length){
case 1:
return week_field28574__1.call(this,name__10089__auto__);
case 2:
return week_field28574__2.call(this,name__10089__auto__,value__10090__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field28574.cljs$core$IFn$_invoke$arity$1 = week_field28574__1;
week_field28574.cljs$core$IFn$_invoke$arity$2 = week_field28574__2;
return week_field28574;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28574);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box28575 = (function() {
var check_box28575 = null;
var check_box28575__1 = (function (name){return check_box28575.call(null,name,null);
});
var check_box28575__2 = (function (name,checked_QMARK_){return check_box28575.call(null,name,checked_QMARK_,"true");
});
var check_box28575__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box28575 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28575__1.call(this,name);
case 2:
return check_box28575__2.call(this,name,checked_QMARK_);
case 3:
return check_box28575__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28575.cljs$core$IFn$_invoke$arity$1 = check_box28575__1;
check_box28575.cljs$core$IFn$_invoke$arity$2 = check_box28575__2;
check_box28575.cljs$core$IFn$_invoke$arity$3 = check_box28575__3;
return check_box28575;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28575);
/**
* Creates a radio button.
*/
sablono.core.radio_button28576 = (function() {
var radio_button28576 = null;
var radio_button28576__1 = (function (group){return radio_button28576.call(null,group,null);
});
var radio_button28576__2 = (function (group,checked_QMARK_){return radio_button28576.call(null,group,checked_QMARK_,"true");
});
var radio_button28576__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button28576 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28576__1.call(this,group);
case 2:
return radio_button28576__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28576__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28576.cljs$core$IFn$_invoke$arity$1 = radio_button28576__1;
radio_button28576.cljs$core$IFn$_invoke$arity$2 = radio_button28576__2;
radio_button28576.cljs$core$IFn$_invoke$arity$3 = radio_button28576__3;
return radio_button28576;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28576);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28577 = (function() {
var select_options28577 = null;
var select_options28577__1 = (function (coll){return select_options28577.call(null,coll,null);
});
var select_options28577__2 = (function (coll,selected){var iter__4264__auto__ = (function iter__28586(s__28587){return (new cljs.core.LazySeq(null,(function (){var s__28587__$1 = s__28587;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28587__$1);if(temp__4126__auto__)
{var s__28587__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28587__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__28587__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__28589 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__28588 = 0;while(true){
if((i__28588 < size__4263__auto__))
{var x = cljs.core._nth.call(null,c__4262__auto__,i__28588);cljs.core.chunk_append.call(null,b__28589,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28592 = x;var text = cljs.core.nth.call(null,vec__28592,0,null);var val = cljs.core.nth.call(null,vec__28592,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28592,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28577.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__28594 = (i__28588 + 1);
i__28588 = G__28594;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28589),iter__28586.call(null,cljs.core.chunk_rest.call(null,s__28587__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28589),null);
}
} else
{var x = cljs.core.first.call(null,s__28587__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28593 = x;var text = cljs.core.nth.call(null,vec__28593,0,null);var val = cljs.core.nth.call(null,vec__28593,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28593,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28577.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28586.call(null,cljs.core.rest.call(null,s__28587__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4264__auto__.call(null,coll);
});
select_options28577 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28577__1.call(this,coll);
case 2:
return select_options28577__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28577.cljs$core$IFn$_invoke$arity$1 = select_options28577__1;
select_options28577.cljs$core$IFn$_invoke$arity$2 = select_options28577__2;
return select_options28577;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28577);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28595 = (function() {
var drop_down28595 = null;
var drop_down28595__2 = (function (name,options){return drop_down28595.call(null,name,options,null);
});
var drop_down28595__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28595 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28595__2.call(this,name,options);
case 3:
return drop_down28595__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28595.cljs$core$IFn$_invoke$arity$2 = drop_down28595__2;
drop_down28595.cljs$core$IFn$_invoke$arity$3 = drop_down28595__3;
return drop_down28595;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28595);
/**
* Creates a text area element.
*/
sablono.core.text_area28596 = (function() {
var text_area28596 = null;
var text_area28596__1 = (function (name){return text_area28596.call(null,name,null);
});
var text_area28596__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area28596 = function(name,value){
switch(arguments.length){
case 1:
return text_area28596__1.call(this,name);
case 2:
return text_area28596__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28596.cljs$core$IFn$_invoke$arity$1 = text_area28596__1;
text_area28596.cljs$core$IFn$_invoke$arity$2 = text_area28596__2;
return text_area28596;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28596);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28597 = (function label28597(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28597);
/**
* Creates a submit button.
*/
sablono.core.submit_button28598 = (function submit_button28598(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28598);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28599 = (function reset_button28599(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28599);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28600 = (function() { 
var form_to28600__delegate = function (p__28601,body){var vec__28603 = p__28601;var method = cljs.core.nth.call(null,vec__28603,0,null);var action = cljs.core.nth.call(null,vec__28603,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28600 = function (p__28601,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to28600__delegate.call(this,p__28601,body);};
form_to28600.cljs$lang$maxFixedArity = 1;
form_to28600.cljs$lang$applyTo = (function (arglist__28604){
var p__28601 = cljs.core.first(arglist__28604);
var body = cljs.core.rest(arglist__28604);
return form_to28600__delegate(p__28601,body);
});
form_to28600.cljs$core$IFn$_invoke$arity$variadic = form_to28600__delegate;
return form_to28600;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28600);

//# sourceMappingURL=core.js.map