// Compiled by ClojureScript 0.0-2322
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_24361 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_24362 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_24363 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_24363,opt_wrapper_24361,table_section_wrapper_24362,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_24361,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_24362,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_24362,cell_wrapper_24363,table_section_wrapper_24362,table_section_wrapper_24362]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3546__auto__ = div.firstChild;if(cljs.core.truth_(and__3546__auto__))
{return div.firstChild.childNodes;
} else
{return and__3546__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__24368 = cljs.core.seq.call(null,tbody);var chunk__24369 = null;var count__24370 = (0);var i__24371 = (0);while(true){
if((i__24371 < count__24370))
{var child = cljs.core._nth.call(null,chunk__24369,i__24371);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24372 = seq__24368;
var G__24373 = chunk__24369;
var G__24374 = count__24370;
var G__24375 = (i__24371 + (1));
seq__24368 = G__24372;
chunk__24369 = G__24373;
count__24370 = G__24374;
i__24371 = G__24375;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__24368);if(temp__4126__auto__)
{var seq__24368__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24368__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__24368__$1);{
var G__24376 = cljs.core.chunk_rest.call(null,seq__24368__$1);
var G__24377 = c__4314__auto__;
var G__24378 = cljs.core.count.call(null,c__4314__auto__);
var G__24379 = (0);
seq__24368 = G__24376;
chunk__24369 = G__24377;
count__24370 = G__24378;
i__24371 = G__24379;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__24368__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__24380 = cljs.core.next.call(null,seq__24368__$1);
var G__24381 = null;
var G__24382 = (0);
var G__24383 = (0);
seq__24368 = G__24380;
chunk__24369 = G__24381;
count__24370 = G__24382;
i__24371 = G__24383;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__24385 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__24385,(0),null);var start_wrap = cljs.core.nth.call(null,vec__24385,(1),null);var end_wrap = cljs.core.nth.call(null,vec__24385,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__24386 = wrapper.lastChild;
var G__24387 = (level - (1));
wrapper = G__24386;
level = G__24387;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3546__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3546__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj24389 = {};return obj24389;
})();
domina.nodes = (function nodes(content){if((function (){var and__3546__auto__ = content;if(and__3546__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3546__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4185__auto__ = (((content == null))?null:content);return (function (){var or__3558__auto__ = (domina.nodes[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.nodes["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3546__auto__ = nodeseq;if(and__3546__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3546__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4185__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3558__auto__ = (domina.single_node[goog.typeOf(x__4185__auto__)]);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = (domina.single_node["_"]);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3546__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3546__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__24390){
var mesg = cljs.core.seq(arglist__24390);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__24391){
var mesg = cljs.core.seq(arglist__24391);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__24392){
var contents = cljs.core.seq(arglist__24392);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__24393_SHARP_){return p1__24393_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__24394_SHARP_,p2__24395_SHARP_){return goog.dom.insertChildAt(p1__24394_SHARP_,p2__24395_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24397_SHARP_,p2__24396_SHARP_){return goog.dom.insertSiblingBefore(p2__24396_SHARP_,p1__24397_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__24399_SHARP_,p2__24398_SHARP_){return goog.dom.insertSiblingAfter(p2__24398_SHARP_,p1__24399_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__24401_SHARP_,p2__24400_SHARP_){return goog.dom.replaceNode(p2__24400_SHARP_,p1__24401_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__24406_24410 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24407_24411 = null;var count__24408_24412 = (0);var i__24409_24413 = (0);while(true){
if((i__24409_24413 < count__24408_24412))
{var n_24414 = cljs.core._nth.call(null,chunk__24407_24411,i__24409_24413);goog.style.setStyle(n_24414,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24415 = seq__24406_24410;
var G__24416 = chunk__24407_24411;
var G__24417 = count__24408_24412;
var G__24418 = (i__24409_24413 + (1));
seq__24406_24410 = G__24415;
chunk__24407_24411 = G__24416;
count__24408_24412 = G__24417;
i__24409_24413 = G__24418;
continue;
}
} else
{var temp__4126__auto___24419 = cljs.core.seq.call(null,seq__24406_24410);if(temp__4126__auto___24419)
{var seq__24406_24420__$1 = temp__4126__auto___24419;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24406_24420__$1))
{var c__4314__auto___24421 = cljs.core.chunk_first.call(null,seq__24406_24420__$1);{
var G__24422 = cljs.core.chunk_rest.call(null,seq__24406_24420__$1);
var G__24423 = c__4314__auto___24421;
var G__24424 = cljs.core.count.call(null,c__4314__auto___24421);
var G__24425 = (0);
seq__24406_24410 = G__24422;
chunk__24407_24411 = G__24423;
count__24408_24412 = G__24424;
i__24409_24413 = G__24425;
continue;
}
} else
{var n_24426 = cljs.core.first.call(null,seq__24406_24420__$1);goog.style.setStyle(n_24426,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24427 = cljs.core.next.call(null,seq__24406_24420__$1);
var G__24428 = null;
var G__24429 = (0);
var G__24430 = (0);
seq__24406_24410 = G__24427;
chunk__24407_24411 = G__24428;
count__24408_24412 = G__24429;
i__24409_24413 = G__24430;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__24431){
var content = cljs.core.first(arglist__24431);
arglist__24431 = cljs.core.next(arglist__24431);
var name = cljs.core.first(arglist__24431);
var value = cljs.core.rest(arglist__24431);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__24436_24440 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24437_24441 = null;var count__24438_24442 = (0);var i__24439_24443 = (0);while(true){
if((i__24439_24443 < count__24438_24442))
{var n_24444 = cljs.core._nth.call(null,chunk__24437_24441,i__24439_24443);n_24444.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24445 = seq__24436_24440;
var G__24446 = chunk__24437_24441;
var G__24447 = count__24438_24442;
var G__24448 = (i__24439_24443 + (1));
seq__24436_24440 = G__24445;
chunk__24437_24441 = G__24446;
count__24438_24442 = G__24447;
i__24439_24443 = G__24448;
continue;
}
} else
{var temp__4126__auto___24449 = cljs.core.seq.call(null,seq__24436_24440);if(temp__4126__auto___24449)
{var seq__24436_24450__$1 = temp__4126__auto___24449;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24436_24450__$1))
{var c__4314__auto___24451 = cljs.core.chunk_first.call(null,seq__24436_24450__$1);{
var G__24452 = cljs.core.chunk_rest.call(null,seq__24436_24450__$1);
var G__24453 = c__4314__auto___24451;
var G__24454 = cljs.core.count.call(null,c__4314__auto___24451);
var G__24455 = (0);
seq__24436_24440 = G__24452;
chunk__24437_24441 = G__24453;
count__24438_24442 = G__24454;
i__24439_24443 = G__24455;
continue;
}
} else
{var n_24456 = cljs.core.first.call(null,seq__24436_24450__$1);n_24456.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__24457 = cljs.core.next.call(null,seq__24436_24450__$1);
var G__24458 = null;
var G__24459 = (0);
var G__24460 = (0);
seq__24436_24440 = G__24457;
chunk__24437_24441 = G__24458;
count__24438_24442 = G__24459;
i__24439_24443 = G__24460;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__24461){
var content = cljs.core.first(arglist__24461);
arglist__24461 = cljs.core.next(arglist__24461);
var name = cljs.core.first(arglist__24461);
var value = cljs.core.rest(arglist__24461);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__24466_24470 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24467_24471 = null;var count__24468_24472 = (0);var i__24469_24473 = (0);while(true){
if((i__24469_24473 < count__24468_24472))
{var n_24474 = cljs.core._nth.call(null,chunk__24467_24471,i__24469_24473);n_24474.removeAttribute(cljs.core.name.call(null,name));
{
var G__24475 = seq__24466_24470;
var G__24476 = chunk__24467_24471;
var G__24477 = count__24468_24472;
var G__24478 = (i__24469_24473 + (1));
seq__24466_24470 = G__24475;
chunk__24467_24471 = G__24476;
count__24468_24472 = G__24477;
i__24469_24473 = G__24478;
continue;
}
} else
{var temp__4126__auto___24479 = cljs.core.seq.call(null,seq__24466_24470);if(temp__4126__auto___24479)
{var seq__24466_24480__$1 = temp__4126__auto___24479;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24466_24480__$1))
{var c__4314__auto___24481 = cljs.core.chunk_first.call(null,seq__24466_24480__$1);{
var G__24482 = cljs.core.chunk_rest.call(null,seq__24466_24480__$1);
var G__24483 = c__4314__auto___24481;
var G__24484 = cljs.core.count.call(null,c__4314__auto___24481);
var G__24485 = (0);
seq__24466_24470 = G__24482;
chunk__24467_24471 = G__24483;
count__24468_24472 = G__24484;
i__24469_24473 = G__24485;
continue;
}
} else
{var n_24486 = cljs.core.first.call(null,seq__24466_24480__$1);n_24486.removeAttribute(cljs.core.name.call(null,name));
{
var G__24487 = cljs.core.next.call(null,seq__24466_24480__$1);
var G__24488 = null;
var G__24489 = (0);
var G__24490 = (0);
seq__24466_24470 = G__24487;
chunk__24467_24471 = G__24488;
count__24468_24472 = G__24489;
i__24469_24473 = G__24490;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__24492 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__24492,(0),null);var v = cljs.core.nth.call(null,vec__24492,(1),null);if(cljs.core.truth_((function (){var and__3546__auto__ = k;if(cljs.core.truth_(and__3546__auto__))
{return v;
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__24493_SHARP_){var attr = attrs__$1.item(p1__24493_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__24500_24506 = cljs.core.seq.call(null,styles);var chunk__24501_24507 = null;var count__24502_24508 = (0);var i__24503_24509 = (0);while(true){
if((i__24503_24509 < count__24502_24508))
{var vec__24504_24510 = cljs.core._nth.call(null,chunk__24501_24507,i__24503_24509);var name_24511 = cljs.core.nth.call(null,vec__24504_24510,(0),null);var value_24512 = cljs.core.nth.call(null,vec__24504_24510,(1),null);domina.set_style_BANG_.call(null,content,name_24511,value_24512);
{
var G__24513 = seq__24500_24506;
var G__24514 = chunk__24501_24507;
var G__24515 = count__24502_24508;
var G__24516 = (i__24503_24509 + (1));
seq__24500_24506 = G__24513;
chunk__24501_24507 = G__24514;
count__24502_24508 = G__24515;
i__24503_24509 = G__24516;
continue;
}
} else
{var temp__4126__auto___24517 = cljs.core.seq.call(null,seq__24500_24506);if(temp__4126__auto___24517)
{var seq__24500_24518__$1 = temp__4126__auto___24517;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24500_24518__$1))
{var c__4314__auto___24519 = cljs.core.chunk_first.call(null,seq__24500_24518__$1);{
var G__24520 = cljs.core.chunk_rest.call(null,seq__24500_24518__$1);
var G__24521 = c__4314__auto___24519;
var G__24522 = cljs.core.count.call(null,c__4314__auto___24519);
var G__24523 = (0);
seq__24500_24506 = G__24520;
chunk__24501_24507 = G__24521;
count__24502_24508 = G__24522;
i__24503_24509 = G__24523;
continue;
}
} else
{var vec__24505_24524 = cljs.core.first.call(null,seq__24500_24518__$1);var name_24525 = cljs.core.nth.call(null,vec__24505_24524,(0),null);var value_24526 = cljs.core.nth.call(null,vec__24505_24524,(1),null);domina.set_style_BANG_.call(null,content,name_24525,value_24526);
{
var G__24527 = cljs.core.next.call(null,seq__24500_24518__$1);
var G__24528 = null;
var G__24529 = (0);
var G__24530 = (0);
seq__24500_24506 = G__24527;
chunk__24501_24507 = G__24528;
count__24502_24508 = G__24529;
i__24503_24509 = G__24530;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24537_24543 = cljs.core.seq.call(null,attrs);var chunk__24538_24544 = null;var count__24539_24545 = (0);var i__24540_24546 = (0);while(true){
if((i__24540_24546 < count__24539_24545))
{var vec__24541_24547 = cljs.core._nth.call(null,chunk__24538_24544,i__24540_24546);var name_24548 = cljs.core.nth.call(null,vec__24541_24547,(0),null);var value_24549 = cljs.core.nth.call(null,vec__24541_24547,(1),null);domina.set_attr_BANG_.call(null,content,name_24548,value_24549);
{
var G__24550 = seq__24537_24543;
var G__24551 = chunk__24538_24544;
var G__24552 = count__24539_24545;
var G__24553 = (i__24540_24546 + (1));
seq__24537_24543 = G__24550;
chunk__24538_24544 = G__24551;
count__24539_24545 = G__24552;
i__24540_24546 = G__24553;
continue;
}
} else
{var temp__4126__auto___24554 = cljs.core.seq.call(null,seq__24537_24543);if(temp__4126__auto___24554)
{var seq__24537_24555__$1 = temp__4126__auto___24554;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24537_24555__$1))
{var c__4314__auto___24556 = cljs.core.chunk_first.call(null,seq__24537_24555__$1);{
var G__24557 = cljs.core.chunk_rest.call(null,seq__24537_24555__$1);
var G__24558 = c__4314__auto___24556;
var G__24559 = cljs.core.count.call(null,c__4314__auto___24556);
var G__24560 = (0);
seq__24537_24543 = G__24557;
chunk__24538_24544 = G__24558;
count__24539_24545 = G__24559;
i__24540_24546 = G__24560;
continue;
}
} else
{var vec__24542_24561 = cljs.core.first.call(null,seq__24537_24555__$1);var name_24562 = cljs.core.nth.call(null,vec__24542_24561,(0),null);var value_24563 = cljs.core.nth.call(null,vec__24542_24561,(1),null);domina.set_attr_BANG_.call(null,content,name_24562,value_24563);
{
var G__24564 = cljs.core.next.call(null,seq__24537_24555__$1);
var G__24565 = null;
var G__24566 = (0);
var G__24567 = (0);
seq__24537_24543 = G__24564;
chunk__24538_24544 = G__24565;
count__24539_24545 = G__24566;
i__24540_24546 = G__24567;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24572_24576 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24573_24577 = null;var count__24574_24578 = (0);var i__24575_24579 = (0);while(true){
if((i__24575_24579 < count__24574_24578))
{var node_24580 = cljs.core._nth.call(null,chunk__24573_24577,i__24575_24579);goog.dom.classes.add(node_24580,class$);
{
var G__24581 = seq__24572_24576;
var G__24582 = chunk__24573_24577;
var G__24583 = count__24574_24578;
var G__24584 = (i__24575_24579 + (1));
seq__24572_24576 = G__24581;
chunk__24573_24577 = G__24582;
count__24574_24578 = G__24583;
i__24575_24579 = G__24584;
continue;
}
} else
{var temp__4126__auto___24585 = cljs.core.seq.call(null,seq__24572_24576);if(temp__4126__auto___24585)
{var seq__24572_24586__$1 = temp__4126__auto___24585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24572_24586__$1))
{var c__4314__auto___24587 = cljs.core.chunk_first.call(null,seq__24572_24586__$1);{
var G__24588 = cljs.core.chunk_rest.call(null,seq__24572_24586__$1);
var G__24589 = c__4314__auto___24587;
var G__24590 = cljs.core.count.call(null,c__4314__auto___24587);
var G__24591 = (0);
seq__24572_24576 = G__24588;
chunk__24573_24577 = G__24589;
count__24574_24578 = G__24590;
i__24575_24579 = G__24591;
continue;
}
} else
{var node_24592 = cljs.core.first.call(null,seq__24572_24586__$1);goog.dom.classes.add(node_24592,class$);
{
var G__24593 = cljs.core.next.call(null,seq__24572_24586__$1);
var G__24594 = null;
var G__24595 = (0);
var G__24596 = (0);
seq__24572_24576 = G__24593;
chunk__24573_24577 = G__24594;
count__24574_24578 = G__24595;
i__24575_24579 = G__24596;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24601_24605 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24602_24606 = null;var count__24603_24607 = (0);var i__24604_24608 = (0);while(true){
if((i__24604_24608 < count__24603_24607))
{var node_24609 = cljs.core._nth.call(null,chunk__24602_24606,i__24604_24608);goog.dom.classes.remove(node_24609,class$);
{
var G__24610 = seq__24601_24605;
var G__24611 = chunk__24602_24606;
var G__24612 = count__24603_24607;
var G__24613 = (i__24604_24608 + (1));
seq__24601_24605 = G__24610;
chunk__24602_24606 = G__24611;
count__24603_24607 = G__24612;
i__24604_24608 = G__24613;
continue;
}
} else
{var temp__4126__auto___24614 = cljs.core.seq.call(null,seq__24601_24605);if(temp__4126__auto___24614)
{var seq__24601_24615__$1 = temp__4126__auto___24614;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24601_24615__$1))
{var c__4314__auto___24616 = cljs.core.chunk_first.call(null,seq__24601_24615__$1);{
var G__24617 = cljs.core.chunk_rest.call(null,seq__24601_24615__$1);
var G__24618 = c__4314__auto___24616;
var G__24619 = cljs.core.count.call(null,c__4314__auto___24616);
var G__24620 = (0);
seq__24601_24605 = G__24617;
chunk__24602_24606 = G__24618;
count__24603_24607 = G__24619;
i__24604_24608 = G__24620;
continue;
}
} else
{var node_24621 = cljs.core.first.call(null,seq__24601_24615__$1);goog.dom.classes.remove(node_24621,class$);
{
var G__24622 = cljs.core.next.call(null,seq__24601_24615__$1);
var G__24623 = null;
var G__24624 = (0);
var G__24625 = (0);
seq__24601_24605 = G__24622;
chunk__24602_24606 = G__24623;
count__24603_24607 = G__24624;
i__24604_24608 = G__24625;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24630_24634 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24631_24635 = null;var count__24632_24636 = (0);var i__24633_24637 = (0);while(true){
if((i__24633_24637 < count__24632_24636))
{var node_24638 = cljs.core._nth.call(null,chunk__24631_24635,i__24633_24637);goog.dom.classes.toggle(node_24638,class$);
{
var G__24639 = seq__24630_24634;
var G__24640 = chunk__24631_24635;
var G__24641 = count__24632_24636;
var G__24642 = (i__24633_24637 + (1));
seq__24630_24634 = G__24639;
chunk__24631_24635 = G__24640;
count__24632_24636 = G__24641;
i__24633_24637 = G__24642;
continue;
}
} else
{var temp__4126__auto___24643 = cljs.core.seq.call(null,seq__24630_24634);if(temp__4126__auto___24643)
{var seq__24630_24644__$1 = temp__4126__auto___24643;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24630_24644__$1))
{var c__4314__auto___24645 = cljs.core.chunk_first.call(null,seq__24630_24644__$1);{
var G__24646 = cljs.core.chunk_rest.call(null,seq__24630_24644__$1);
var G__24647 = c__4314__auto___24645;
var G__24648 = cljs.core.count.call(null,c__4314__auto___24645);
var G__24649 = (0);
seq__24630_24634 = G__24646;
chunk__24631_24635 = G__24647;
count__24632_24636 = G__24648;
i__24633_24637 = G__24649;
continue;
}
} else
{var node_24650 = cljs.core.first.call(null,seq__24630_24644__$1);goog.dom.classes.toggle(node_24650,class$);
{
var G__24651 = cljs.core.next.call(null,seq__24630_24644__$1);
var G__24652 = null;
var G__24653 = (0);
var G__24654 = (0);
seq__24630_24634 = G__24651;
chunk__24631_24635 = G__24652;
count__24632_24636 = G__24653;
i__24633_24637 = G__24654;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24663__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__24659_24664 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24660_24665 = null;var count__24661_24666 = (0);var i__24662_24667 = (0);while(true){
if((i__24662_24667 < count__24661_24666))
{var node_24668 = cljs.core._nth.call(null,chunk__24660_24665,i__24662_24667);goog.dom.classes.set(node_24668,classes_24663__$1);
{
var G__24669 = seq__24659_24664;
var G__24670 = chunk__24660_24665;
var G__24671 = count__24661_24666;
var G__24672 = (i__24662_24667 + (1));
seq__24659_24664 = G__24669;
chunk__24660_24665 = G__24670;
count__24661_24666 = G__24671;
i__24662_24667 = G__24672;
continue;
}
} else
{var temp__4126__auto___24673 = cljs.core.seq.call(null,seq__24659_24664);if(temp__4126__auto___24673)
{var seq__24659_24674__$1 = temp__4126__auto___24673;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24659_24674__$1))
{var c__4314__auto___24675 = cljs.core.chunk_first.call(null,seq__24659_24674__$1);{
var G__24676 = cljs.core.chunk_rest.call(null,seq__24659_24674__$1);
var G__24677 = c__4314__auto___24675;
var G__24678 = cljs.core.count.call(null,c__4314__auto___24675);
var G__24679 = (0);
seq__24659_24664 = G__24676;
chunk__24660_24665 = G__24677;
count__24661_24666 = G__24678;
i__24662_24667 = G__24679;
continue;
}
} else
{var node_24680 = cljs.core.first.call(null,seq__24659_24674__$1);goog.dom.classes.set(node_24680,classes_24663__$1);
{
var G__24681 = cljs.core.next.call(null,seq__24659_24674__$1);
var G__24682 = null;
var G__24683 = (0);
var G__24684 = (0);
seq__24659_24664 = G__24681;
chunk__24660_24665 = G__24682;
count__24661_24666 = G__24683;
i__24662_24667 = G__24684;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24689_24693 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24690_24694 = null;var count__24691_24695 = (0);var i__24692_24696 = (0);while(true){
if((i__24692_24696 < count__24691_24695))
{var node_24697 = cljs.core._nth.call(null,chunk__24690_24694,i__24692_24696);goog.dom.setTextContent(node_24697,value);
{
var G__24698 = seq__24689_24693;
var G__24699 = chunk__24690_24694;
var G__24700 = count__24691_24695;
var G__24701 = (i__24692_24696 + (1));
seq__24689_24693 = G__24698;
chunk__24690_24694 = G__24699;
count__24691_24695 = G__24700;
i__24692_24696 = G__24701;
continue;
}
} else
{var temp__4126__auto___24702 = cljs.core.seq.call(null,seq__24689_24693);if(temp__4126__auto___24702)
{var seq__24689_24703__$1 = temp__4126__auto___24702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24689_24703__$1))
{var c__4314__auto___24704 = cljs.core.chunk_first.call(null,seq__24689_24703__$1);{
var G__24705 = cljs.core.chunk_rest.call(null,seq__24689_24703__$1);
var G__24706 = c__4314__auto___24704;
var G__24707 = cljs.core.count.call(null,c__4314__auto___24704);
var G__24708 = (0);
seq__24689_24693 = G__24705;
chunk__24690_24694 = G__24706;
count__24691_24695 = G__24707;
i__24692_24696 = G__24708;
continue;
}
} else
{var node_24709 = cljs.core.first.call(null,seq__24689_24703__$1);goog.dom.setTextContent(node_24709,value);
{
var G__24710 = cljs.core.next.call(null,seq__24689_24703__$1);
var G__24711 = null;
var G__24712 = (0);
var G__24713 = (0);
seq__24689_24693 = G__24710;
chunk__24690_24694 = G__24711;
count__24691_24695 = G__24712;
i__24692_24696 = G__24713;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24718_24722 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24719_24723 = null;var count__24720_24724 = (0);var i__24721_24725 = (0);while(true){
if((i__24721_24725 < count__24720_24724))
{var node_24726 = cljs.core._nth.call(null,chunk__24719_24723,i__24721_24725);goog.dom.forms.setValue(node_24726,value);
{
var G__24727 = seq__24718_24722;
var G__24728 = chunk__24719_24723;
var G__24729 = count__24720_24724;
var G__24730 = (i__24721_24725 + (1));
seq__24718_24722 = G__24727;
chunk__24719_24723 = G__24728;
count__24720_24724 = G__24729;
i__24721_24725 = G__24730;
continue;
}
} else
{var temp__4126__auto___24731 = cljs.core.seq.call(null,seq__24718_24722);if(temp__4126__auto___24731)
{var seq__24718_24732__$1 = temp__4126__auto___24731;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24718_24732__$1))
{var c__4314__auto___24733 = cljs.core.chunk_first.call(null,seq__24718_24732__$1);{
var G__24734 = cljs.core.chunk_rest.call(null,seq__24718_24732__$1);
var G__24735 = c__4314__auto___24733;
var G__24736 = cljs.core.count.call(null,c__4314__auto___24733);
var G__24737 = (0);
seq__24718_24722 = G__24734;
chunk__24719_24723 = G__24735;
count__24720_24724 = G__24736;
i__24721_24725 = G__24737;
continue;
}
} else
{var node_24738 = cljs.core.first.call(null,seq__24718_24732__$1);goog.dom.forms.setValue(node_24738,value);
{
var G__24739 = cljs.core.next.call(null,seq__24718_24732__$1);
var G__24740 = null;
var G__24741 = (0);
var G__24742 = (0);
seq__24718_24722 = G__24739;
chunk__24719_24723 = G__24740;
count__24720_24724 = G__24741;
i__24721_24725 = G__24742;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3546__auto__ = allows_inner_html_QMARK_;if(and__3546__auto__)
{var and__3546__auto____$1 = (function (){var or__3558__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3546__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
})()))
{var value_24753 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24749_24754 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__24750_24755 = null;var count__24751_24756 = (0);var i__24752_24757 = (0);while(true){
if((i__24752_24757 < count__24751_24756))
{var node_24758 = cljs.core._nth.call(null,chunk__24750_24755,i__24752_24757);node_24758.innerHTML = value_24753;
{
var G__24759 = seq__24749_24754;
var G__24760 = chunk__24750_24755;
var G__24761 = count__24751_24756;
var G__24762 = (i__24752_24757 + (1));
seq__24749_24754 = G__24759;
chunk__24750_24755 = G__24760;
count__24751_24756 = G__24761;
i__24752_24757 = G__24762;
continue;
}
} else
{var temp__4126__auto___24763 = cljs.core.seq.call(null,seq__24749_24754);if(temp__4126__auto___24763)
{var seq__24749_24764__$1 = temp__4126__auto___24763;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24749_24764__$1))
{var c__4314__auto___24765 = cljs.core.chunk_first.call(null,seq__24749_24764__$1);{
var G__24766 = cljs.core.chunk_rest.call(null,seq__24749_24764__$1);
var G__24767 = c__4314__auto___24765;
var G__24768 = cljs.core.count.call(null,c__4314__auto___24765);
var G__24769 = (0);
seq__24749_24754 = G__24766;
chunk__24750_24755 = G__24767;
count__24751_24756 = G__24768;
i__24752_24757 = G__24769;
continue;
}
} else
{var node_24770 = cljs.core.first.call(null,seq__24749_24764__$1);node_24770.innerHTML = value_24753;
{
var G__24771 = cljs.core.next.call(null,seq__24749_24764__$1);
var G__24772 = null;
var G__24773 = (0);
var G__24774 = (0);
seq__24749_24754 = G__24771;
chunk__24750_24755 = G__24772;
count__24751_24756 = G__24773;
i__24752_24757 = G__24774;
continue;
}
}
} else
{}
}
break;
}
}catch (e24748){if((e24748 instanceof Error))
{var e_24775 = e24748;domina.replace_children_BANG_.call(null,content,value_24753);
} else
{throw e24748;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3546__auto__ = bubble;if(cljs.core.truth_(and__3546__auto__))
{return (value == null);
} else
{return and__3546__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3558__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24782_24786 = cljs.core.seq.call(null,children);var chunk__24783_24787 = null;var count__24784_24788 = (0);var i__24785_24789 = (0);while(true){
if((i__24785_24789 < count__24784_24788))
{var child_24790 = cljs.core._nth.call(null,chunk__24783_24787,i__24785_24789);frag.appendChild(child_24790);
{
var G__24791 = seq__24782_24786;
var G__24792 = chunk__24783_24787;
var G__24793 = count__24784_24788;
var G__24794 = (i__24785_24789 + (1));
seq__24782_24786 = G__24791;
chunk__24783_24787 = G__24792;
count__24784_24788 = G__24793;
i__24785_24789 = G__24794;
continue;
}
} else
{var temp__4126__auto___24795 = cljs.core.seq.call(null,seq__24782_24786);if(temp__4126__auto___24795)
{var seq__24782_24796__$1 = temp__4126__auto___24795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24782_24796__$1))
{var c__4314__auto___24797 = cljs.core.chunk_first.call(null,seq__24782_24796__$1);{
var G__24798 = cljs.core.chunk_rest.call(null,seq__24782_24796__$1);
var G__24799 = c__4314__auto___24797;
var G__24800 = cljs.core.count.call(null,c__4314__auto___24797);
var G__24801 = (0);
seq__24782_24786 = G__24798;
chunk__24783_24787 = G__24799;
count__24784_24788 = G__24800;
i__24785_24789 = G__24801;
continue;
}
} else
{var child_24802 = cljs.core.first.call(null,seq__24782_24796__$1);frag.appendChild(child_24802);
{
var G__24803 = cljs.core.next.call(null,seq__24782_24796__$1);
var G__24804 = null;
var G__24805 = (0);
var G__24806 = (0);
seq__24782_24786 = G__24803;
chunk__24783_24787 = G__24804;
count__24784_24788 = G__24805;
i__24785_24789 = G__24806;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__24776_SHARP_,p2__24777_SHARP_){return f.call(null,p1__24776_SHARP_,p2__24777_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3546__auto__ = obj;if(cljs.core.truth_(and__3546__auto__))
{var and__3546__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3546__auto____$1)
{return obj.length;
} else
{return and__3546__auto____$1;
}
} else
{return and__3546__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__24808 = list_thing;if(G__24808)
{var bit__4208__auto__ = (G__24808.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24808.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24808.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24808);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24808);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__24809 = content;if(G__24809)
{var bit__4208__auto__ = (G__24809.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24809.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24809.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24809);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24809);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__24810 = content;if(G__24810)
{var bit__4208__auto__ = (G__24810.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4208__auto__) || (G__24810.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24810.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24810);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__24810);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
