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
var G__28491__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__28490 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__28490,0,null);var body = cljs.core.nthnext.call(null,vec__28490,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__28491 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__28491__delegate.call(this,args);};
G__28491.cljs$lang$maxFixedArity = 0;
G__28491.cljs$lang$applyTo = (function (arglist__28492){
var args = cljs.core.seq(arglist__28492);
return G__28491__delegate(args);
});
G__28491.cljs$core$IFn$_invoke$arity$variadic = G__28491__delegate;
return G__28491;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4266__auto__ = (function iter__28497(s__28498){return (new cljs.core.LazySeq(null,(function (){var s__28498__$1 = s__28498;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28498__$1);if(temp__4126__auto__)
{var s__28498__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28498__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__28498__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__28500 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__28499 = 0;while(true){
if((i__28499 < size__4265__auto__))
{var args = cljs.core._nth.call(null,c__4264__auto__,i__28499);cljs.core.chunk_append.call(null,b__28500,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__28501 = (i__28499 + 1);
i__28499 = G__28501;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28500),iter__28497.call(null,cljs.core.chunk_rest.call(null,s__28498__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28500),null);
}
} else
{var args = cljs.core.first.call(null,s__28498__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__28497.call(null,cljs.core.rest.call(null,s__28498__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,arglists);
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
var include_css__delegate = function (styles){var iter__4266__auto__ = (function iter__28506(s__28507){return (new cljs.core.LazySeq(null,(function (){var s__28507__$1 = s__28507;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28507__$1);if(temp__4126__auto__)
{var s__28507__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28507__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__28507__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__28509 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__28508 = 0;while(true){
if((i__28508 < size__4265__auto__))
{var style = cljs.core._nth.call(null,c__4264__auto__,i__28508);cljs.core.chunk_append.call(null,b__28509,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__28510 = (i__28508 + 1);
i__28508 = G__28510;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28509),iter__28506.call(null,cljs.core.chunk_rest.call(null,s__28507__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28509),null);
}
} else
{var style = cljs.core.first.call(null,s__28507__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__28506.call(null,cljs.core.rest.call(null,s__28507__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__28511){
var styles = cljs.core.seq(arglist__28511);
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
sablono.core.link_to28512 = (function() { 
var link_to28512__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to28512 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to28512__delegate.call(this,url,content);};
link_to28512.cljs$lang$maxFixedArity = 1;
link_to28512.cljs$lang$applyTo = (function (arglist__28513){
var url = cljs.core.first(arglist__28513);
var content = cljs.core.rest(arglist__28513);
return link_to28512__delegate(url,content);
});
link_to28512.cljs$core$IFn$_invoke$arity$variadic = link_to28512__delegate;
return link_to28512;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28512);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to28514 = (function() { 
var mail_to28514__delegate = function (e_mail,p__28515){var vec__28517 = p__28515;var content = cljs.core.nth.call(null,vec__28517,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3541__auto__ = content;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to28514 = function (e_mail,var_args){
var p__28515 = null;if (arguments.length > 1) {
  p__28515 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to28514__delegate.call(this,e_mail,p__28515);};
mail_to28514.cljs$lang$maxFixedArity = 1;
mail_to28514.cljs$lang$applyTo = (function (arglist__28518){
var e_mail = cljs.core.first(arglist__28518);
var p__28515 = cljs.core.rest(arglist__28518);
return mail_to28514__delegate(e_mail,p__28515);
});
mail_to28514.cljs$core$IFn$_invoke$arity$variadic = mail_to28514__delegate;
return mail_to28514;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28514);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list28519 = (function unordered_list28519(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__4266__auto__ = (function iter__28524(s__28525){return (new cljs.core.LazySeq(null,(function (){var s__28525__$1 = s__28525;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28525__$1);if(temp__4126__auto__)
{var s__28525__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28525__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__28525__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__28527 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__28526 = 0;while(true){
if((i__28526 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__28526);cljs.core.chunk_append.call(null,b__28527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28528 = (i__28526 + 1);
i__28526 = G__28528;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28527),iter__28524.call(null,cljs.core.chunk_rest.call(null,s__28525__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28527),null);
}
} else
{var x = cljs.core.first.call(null,s__28525__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28524.call(null,cljs.core.rest.call(null,s__28525__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28519);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list28529 = (function ordered_list28529(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__4266__auto__ = (function iter__28534(s__28535){return (new cljs.core.LazySeq(null,(function (){var s__28535__$1 = s__28535;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28535__$1);if(temp__4126__auto__)
{var s__28535__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28535__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__28535__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__28537 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__28536 = 0;while(true){
if((i__28536 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__28536);cljs.core.chunk_append.call(null,b__28537,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__28538 = (i__28536 + 1);
i__28536 = G__28538;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28537),iter__28534.call(null,cljs.core.chunk_rest.call(null,s__28535__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28537),null);
}
} else
{var x = cljs.core.first.call(null,s__28535__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__28534.call(null,cljs.core.rest.call(null,s__28535__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28529);
/**
* Create an image element.
*/
sablono.core.image28539 = (function() {
var image28539 = null;
var image28539__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image28539__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image28539 = function(src,alt){
switch(arguments.length){
case 1:
return image28539__1.call(this,src);
case 2:
return image28539__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image28539.cljs$core$IFn$_invoke$arity$1 = image28539__1;
image28539.cljs$core$IFn$_invoke$arity$2 = image28539__2;
return image28539;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28539);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__28540_SHARP_,p2__28541_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28540_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28541_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__28542_SHARP_,p2__28543_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28542_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__28543_SHARP_));
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
sablono.core.color_field28544 = (function() {
var color_field28544 = null;
var color_field28544__1 = (function (name__10091__auto__){return color_field28544.call(null,name__10091__auto__,null);
});
var color_field28544__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1545688804,null))),name__10091__auto__,value__10092__auto__);
});
color_field28544 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return color_field28544__1.call(this,name__10091__auto__);
case 2:
return color_field28544__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field28544.cljs$core$IFn$_invoke$arity$1 = color_field28544__1;
color_field28544.cljs$core$IFn$_invoke$arity$2 = color_field28544__2;
return color_field28544;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28544);
/**
* Creates a date input field.
*/
sablono.core.date_field28545 = (function() {
var date_field28545 = null;
var date_field28545__1 = (function (name__10091__auto__){return date_field28545.call(null,name__10091__auto__,null);
});
var date_field28545__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",-1637455513,null))),name__10091__auto__,value__10092__auto__);
});
date_field28545 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return date_field28545__1.call(this,name__10091__auto__);
case 2:
return date_field28545__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field28545.cljs$core$IFn$_invoke$arity$1 = date_field28545__1;
date_field28545.cljs$core$IFn$_invoke$arity$2 = date_field28545__2;
return date_field28545;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28545);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field28546 = (function() {
var datetime_field28546 = null;
var datetime_field28546__1 = (function (name__10091__auto__){return datetime_field28546.call(null,name__10091__auto__,null);
});
var datetime_field28546__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))),name__10091__auto__,value__10092__auto__);
});
datetime_field28546 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return datetime_field28546__1.call(this,name__10091__auto__);
case 2:
return datetime_field28546__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field28546.cljs$core$IFn$_invoke$arity$1 = datetime_field28546__1;
datetime_field28546.cljs$core$IFn$_invoke$arity$2 = datetime_field28546__2;
return datetime_field28546;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28546);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field28547 = (function() {
var datetime_local_field28547 = null;
var datetime_local_field28547__1 = (function (name__10091__auto__){return datetime_local_field28547.call(null,name__10091__auto__,null);
});
var datetime_local_field28547__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))),name__10091__auto__,value__10092__auto__);
});
datetime_local_field28547 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return datetime_local_field28547__1.call(this,name__10091__auto__);
case 2:
return datetime_local_field28547__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field28547.cljs$core$IFn$_invoke$arity$1 = datetime_local_field28547__1;
datetime_local_field28547.cljs$core$IFn$_invoke$arity$2 = datetime_local_field28547__2;
return datetime_local_field28547;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28547);
/**
* Creates a email input field.
*/
sablono.core.email_field28548 = (function() {
var email_field28548 = null;
var email_field28548__1 = (function (name__10091__auto__){return email_field28548.call(null,name__10091__auto__,null);
});
var email_field28548__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1543912107,null))),name__10091__auto__,value__10092__auto__);
});
email_field28548 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return email_field28548__1.call(this,name__10091__auto__);
case 2:
return email_field28548__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28548.cljs$core$IFn$_invoke$arity$1 = email_field28548__1;
email_field28548.cljs$core$IFn$_invoke$arity$2 = email_field28548__2;
return email_field28548;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28548);
/**
* Creates a file input field.
*/
sablono.core.file_field28549 = (function() {
var file_field28549 = null;
var file_field28549__1 = (function (name__10091__auto__){return file_field28549.call(null,name__10091__auto__,null);
});
var file_field28549__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",-1637388491,null))),name__10091__auto__,value__10092__auto__);
});
file_field28549 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return file_field28549__1.call(this,name__10091__auto__);
case 2:
return file_field28549__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field28549.cljs$core$IFn$_invoke$arity$1 = file_field28549__1;
file_field28549.cljs$core$IFn$_invoke$arity$2 = file_field28549__2;
return file_field28549;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28549);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field28550 = (function() {
var hidden_field28550 = null;
var hidden_field28550__1 = (function (name__10091__auto__){return hidden_field28550.call(null,name__10091__auto__,null);
});
var hidden_field28550__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))),name__10091__auto__,value__10092__auto__);
});
hidden_field28550 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return hidden_field28550__1.call(this,name__10091__auto__);
case 2:
return hidden_field28550__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28550.cljs$core$IFn$_invoke$arity$1 = hidden_field28550__1;
hidden_field28550.cljs$core$IFn$_invoke$arity$2 = hidden_field28550__2;
return hidden_field28550;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28550);
/**
* Creates a month input field.
*/
sablono.core.month_field28551 = (function() {
var month_field28551 = null;
var month_field28551__1 = (function (name__10091__auto__){return month_field28551.call(null,name__10091__auto__,null);
});
var month_field28551__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-1536451527,null))),name__10091__auto__,value__10092__auto__);
});
month_field28551 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return month_field28551__1.call(this,name__10091__auto__);
case 2:
return month_field28551__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field28551.cljs$core$IFn$_invoke$arity$1 = month_field28551__1;
month_field28551.cljs$core$IFn$_invoke$arity$2 = month_field28551__2;
return month_field28551;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28551);
/**
* Creates a number input field.
*/
sablono.core.number_field28552 = (function() {
var number_field28552 = null;
var number_field28552__1 = (function (name__10091__auto__){return number_field28552.call(null,name__10091__auto__,null);
});
var number_field28552__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",1620071682,null))),name__10091__auto__,value__10092__auto__);
});
number_field28552 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return number_field28552__1.call(this,name__10091__auto__);
case 2:
return number_field28552__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field28552.cljs$core$IFn$_invoke$arity$1 = number_field28552__1;
number_field28552.cljs$core$IFn$_invoke$arity$2 = number_field28552__2;
return number_field28552;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28552);
/**
* Creates a password input field.
*/
sablono.core.password_field28553 = (function() {
var password_field28553 = null;
var password_field28553__1 = (function (name__10091__auto__){return password_field28553.call(null,name__10091__auto__,null);
});
var password_field28553__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",-423545772,null))),name__10091__auto__,value__10092__auto__);
});
password_field28553 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return password_field28553__1.call(this,name__10091__auto__);
case 2:
return password_field28553__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28553.cljs$core$IFn$_invoke$arity$1 = password_field28553__1;
password_field28553.cljs$core$IFn$_invoke$arity$2 = password_field28553__2;
return password_field28553;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28553);
/**
* Creates a range input field.
*/
sablono.core.range_field28554 = (function() {
var range_field28554 = null;
var range_field28554__1 = (function (name__10091__auto__){return range_field28554.call(null,name__10091__auto__,null);
});
var range_field28554__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1532251402,null))),name__10091__auto__,value__10092__auto__);
});
range_field28554 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return range_field28554__1.call(this,name__10091__auto__);
case 2:
return range_field28554__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field28554.cljs$core$IFn$_invoke$arity$1 = range_field28554__1;
range_field28554.cljs$core$IFn$_invoke$arity$2 = range_field28554__2;
return range_field28554;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28554);
/**
* Creates a search input field.
*/
sablono.core.search_field28555 = (function() {
var search_field28555 = null;
var search_field28555__1 = (function (name__10091__auto__){return search_field28555.call(null,name__10091__auto__,null);
});
var search_field28555__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",1748098913,null))),name__10091__auto__,value__10092__auto__);
});
search_field28555 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return search_field28555__1.call(this,name__10091__auto__);
case 2:
return search_field28555__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field28555.cljs$core$IFn$_invoke$arity$1 = search_field28555__1;
search_field28555.cljs$core$IFn$_invoke$arity$2 = search_field28555__2;
return search_field28555;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28555);
/**
* Creates a tel input field.
*/
sablono.core.tel_field28556 = (function() {
var tel_field28556 = null;
var tel_field28556__1 = (function (name__10091__auto__){return tel_field28556.call(null,name__10091__auto__,null);
});
var tel_field28556__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))),name__10091__auto__,value__10092__auto__);
});
tel_field28556 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return tel_field28556__1.call(this,name__10091__auto__);
case 2:
return tel_field28556__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field28556.cljs$core$IFn$_invoke$arity$1 = tel_field28556__1;
tel_field28556.cljs$core$IFn$_invoke$arity$2 = tel_field28556__2;
return tel_field28556;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28556);
/**
* Creates a text input field.
*/
sablono.core.text_field28557 = (function() {
var text_field28557 = null;
var text_field28557__1 = (function (name__10091__auto__){return text_field28557.call(null,name__10091__auto__,null);
});
var text_field28557__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-1636974874,null))),name__10091__auto__,value__10092__auto__);
});
text_field28557 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return text_field28557__1.call(this,name__10091__auto__);
case 2:
return text_field28557__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28557.cljs$core$IFn$_invoke$arity$1 = text_field28557__1;
text_field28557.cljs$core$IFn$_invoke$arity$2 = text_field28557__2;
return text_field28557;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28557);
/**
* Creates a time input field.
*/
sablono.core.time_field28558 = (function() {
var time_field28558 = null;
var time_field28558__1 = (function (name__10091__auto__){return time_field28558.call(null,name__10091__auto__,null);
});
var time_field28558__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1636971386,null))),name__10091__auto__,value__10092__auto__);
});
time_field28558 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return time_field28558__1.call(this,name__10091__auto__);
case 2:
return time_field28558__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field28558.cljs$core$IFn$_invoke$arity$1 = time_field28558__1;
time_field28558.cljs$core$IFn$_invoke$arity$2 = time_field28558__2;
return time_field28558;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28558);
/**
* Creates a url input field.
*/
sablono.core.url_field28559 = (function() {
var url_field28559 = null;
var url_field28559__1 = (function (name__10091__auto__){return url_field28559.call(null,name__10091__auto__,null);
});
var url_field28559__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",-1640415448,null))),name__10091__auto__,value__10092__auto__);
});
url_field28559 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return url_field28559__1.call(this,name__10091__auto__);
case 2:
return url_field28559__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field28559.cljs$core$IFn$_invoke$arity$1 = url_field28559__1;
url_field28559.cljs$core$IFn$_invoke$arity$2 = url_field28559__2;
return url_field28559;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28559);
/**
* Creates a week input field.
*/
sablono.core.week_field28560 = (function() {
var week_field28560 = null;
var week_field28560__1 = (function (name__10091__auto__){return week_field28560.call(null,name__10091__auto__,null);
});
var week_field28560__2 = (function (name__10091__auto__,value__10092__auto__){return sablono.core.input_field_STAR_.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",-1636886099,null))),name__10091__auto__,value__10092__auto__);
});
week_field28560 = function(name__10091__auto__,value__10092__auto__){
switch(arguments.length){
case 1:
return week_field28560__1.call(this,name__10091__auto__);
case 2:
return week_field28560__2.call(this,name__10091__auto__,value__10092__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field28560.cljs$core$IFn$_invoke$arity$1 = week_field28560__1;
week_field28560.cljs$core$IFn$_invoke$arity$2 = week_field28560__2;
return week_field28560;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28560);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box28561 = (function() {
var check_box28561 = null;
var check_box28561__1 = (function (name){return check_box28561.call(null,name,null);
});
var check_box28561__2 = (function (name,checked_QMARK_){return check_box28561.call(null,name,checked_QMARK_,"true");
});
var check_box28561__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box28561 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28561__1.call(this,name);
case 2:
return check_box28561__2.call(this,name,checked_QMARK_);
case 3:
return check_box28561__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28561.cljs$core$IFn$_invoke$arity$1 = check_box28561__1;
check_box28561.cljs$core$IFn$_invoke$arity$2 = check_box28561__2;
check_box28561.cljs$core$IFn$_invoke$arity$3 = check_box28561__3;
return check_box28561;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28561);
/**
* Creates a radio button.
*/
sablono.core.radio_button28562 = (function() {
var radio_button28562 = null;
var radio_button28562__1 = (function (group){return radio_button28562.call(null,group,null);
});
var radio_button28562__2 = (function (group,checked_QMARK_){return radio_button28562.call(null,group,checked_QMARK_,"true");
});
var radio_button28562__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button28562 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28562__1.call(this,group);
case 2:
return radio_button28562__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28562__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28562.cljs$core$IFn$_invoke$arity$1 = radio_button28562__1;
radio_button28562.cljs$core$IFn$_invoke$arity$2 = radio_button28562__2;
radio_button28562.cljs$core$IFn$_invoke$arity$3 = radio_button28562__3;
return radio_button28562;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28562);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28563 = (function() {
var select_options28563 = null;
var select_options28563__1 = (function (coll){return select_options28563.call(null,coll,null);
});
var select_options28563__2 = (function (coll,selected){var iter__4266__auto__ = (function iter__28572(s__28573){return (new cljs.core.LazySeq(null,(function (){var s__28573__$1 = s__28573;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28573__$1);if(temp__4126__auto__)
{var s__28573__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__28573__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__28573__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__28575 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__28574 = 0;while(true){
if((i__28574 < size__4265__auto__))
{var x = cljs.core._nth.call(null,c__4264__auto__,i__28574);cljs.core.chunk_append.call(null,b__28575,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28578 = x;var text = cljs.core.nth.call(null,vec__28578,0,null);var val = cljs.core.nth.call(null,vec__28578,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28578,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28563.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__28580 = (i__28574 + 1);
i__28574 = G__28580;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28575),iter__28572.call(null,cljs.core.chunk_rest.call(null,s__28573__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28575),null);
}
} else
{var x = cljs.core.first.call(null,s__28573__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28579 = x;var text = cljs.core.nth.call(null,vec__28579,0,null);var val = cljs.core.nth.call(null,vec__28579,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__28579,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options28563.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28572.call(null,cljs.core.rest.call(null,s__28573__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4266__auto__.call(null,coll);
});
select_options28563 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28563__1.call(this,coll);
case 2:
return select_options28563__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28563.cljs$core$IFn$_invoke$arity$1 = select_options28563__1;
select_options28563.cljs$core$IFn$_invoke$arity$2 = select_options28563__2;
return select_options28563;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28563);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28581 = (function() {
var drop_down28581 = null;
var drop_down28581__2 = (function (name,options){return drop_down28581.call(null,name,options,null);
});
var drop_down28581__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28581 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28581__2.call(this,name,options);
case 3:
return drop_down28581__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28581.cljs$core$IFn$_invoke$arity$2 = drop_down28581__2;
drop_down28581.cljs$core$IFn$_invoke$arity$3 = drop_down28581__3;
return drop_down28581;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28581);
/**
* Creates a text area element.
*/
sablono.core.text_area28582 = (function() {
var text_area28582 = null;
var text_area28582__1 = (function (name){return text_area28582.call(null,name,null);
});
var text_area28582__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area28582 = function(name,value){
switch(arguments.length){
case 1:
return text_area28582__1.call(this,name);
case 2:
return text_area28582__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28582.cljs$core$IFn$_invoke$arity$1 = text_area28582__1;
text_area28582.cljs$core$IFn$_invoke$arity$2 = text_area28582__2;
return text_area28582;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28582);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28583 = (function label28583(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28583);
/**
* Creates a submit button.
*/
sablono.core.submit_button28584 = (function submit_button28584(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28584);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28585 = (function reset_button28585(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28585);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28586 = (function() { 
var form_to28586__delegate = function (p__28587,body){var vec__28589 = p__28587;var method = cljs.core.nth.call(null,vec__28589,0,null);var action = cljs.core.nth.call(null,vec__28589,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28586 = function (p__28587,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to28586__delegate.call(this,p__28587,body);};
form_to28586.cljs$lang$maxFixedArity = 1;
form_to28586.cljs$lang$applyTo = (function (arglist__28590){
var p__28587 = cljs.core.first(arglist__28590);
var body = cljs.core.rest(arglist__28590);
return form_to28586__delegate(p__28587,body);
});
form_to28586.cljs$core$IFn$_invoke$arity$variadic = form_to28586__delegate;
return form_to28586;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28586);
