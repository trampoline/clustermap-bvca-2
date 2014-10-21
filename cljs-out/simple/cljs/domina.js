// Compiled by ClojureScript 0.0-2356
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
var opt_wrapper_40467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_40468 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_40469 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_40469,opt_wrapper_40467,table_section_wrapper_40468,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_40467,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_40468,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_40468,cell_wrapper_40469,table_section_wrapper_40468,table_section_wrapper_40468]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__40474 = cljs.core.seq.call(null,tbody);var chunk__40475 = null;var count__40476 = (0);var i__40477 = (0);while(true){
if((i__40477 < count__40476))
{var child = cljs.core._nth.call(null,chunk__40475,i__40477);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40478 = seq__40474;
var G__40479 = chunk__40475;
var G__40480 = count__40476;
var G__40481 = (i__40477 + (1));
seq__40474 = G__40478;
chunk__40475 = G__40479;
count__40476 = G__40480;
i__40477 = G__40481;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__40474);if(temp__4126__auto__)
{var seq__40474__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40474__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__40474__$1);{
var G__40482 = cljs.core.chunk_rest.call(null,seq__40474__$1);
var G__40483 = c__4406__auto__;
var G__40484 = cljs.core.count.call(null,c__4406__auto__);
var G__40485 = (0);
seq__40474 = G__40482;
chunk__40475 = G__40483;
count__40476 = G__40484;
i__40477 = G__40485;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__40474__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__40486 = cljs.core.next.call(null,seq__40474__$1);
var G__40487 = null;
var G__40488 = (0);
var G__40489 = (0);
seq__40474 = G__40486;
chunk__40475 = G__40487;
count__40476 = G__40488;
i__40477 = G__40489;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__40491 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__40491,(0),null);var start_wrap = cljs.core.nth.call(null,vec__40491,(1),null);var end_wrap = cljs.core.nth.call(null,vec__40491,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__40492 = wrapper.lastChild;
var G__40493 = (level - (1));
wrapper = G__40492;
level = G__40493;
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
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
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
domina.DomContent = (function (){var obj40495 = {};return obj40495;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3625__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__40496){
var mesg = cljs.core.seq(arglist__40496);
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
log.cljs$lang$applyTo = (function (arglist__40497){
var mesg = cljs.core.seq(arglist__40497);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__40498){
var contents = cljs.core.seq(arglist__40498);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__40499_SHARP_){return p1__40499_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__40500_SHARP_,p2__40501_SHARP_){return goog.dom.insertChildAt(p1__40500_SHARP_,p2__40501_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__40503_SHARP_,p2__40502_SHARP_){return goog.dom.insertSiblingBefore(p2__40502_SHARP_,p1__40503_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__40505_SHARP_,p2__40504_SHARP_){return goog.dom.insertSiblingAfter(p2__40504_SHARP_,p1__40505_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__40507_SHARP_,p2__40506_SHARP_){return goog.dom.replaceNode(p2__40506_SHARP_,p1__40507_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__40512_40516 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40513_40517 = null;var count__40514_40518 = (0);var i__40515_40519 = (0);while(true){
if((i__40515_40519 < count__40514_40518))
{var n_40520 = cljs.core._nth.call(null,chunk__40513_40517,i__40515_40519);goog.style.setStyle(n_40520,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40521 = seq__40512_40516;
var G__40522 = chunk__40513_40517;
var G__40523 = count__40514_40518;
var G__40524 = (i__40515_40519 + (1));
seq__40512_40516 = G__40521;
chunk__40513_40517 = G__40522;
count__40514_40518 = G__40523;
i__40515_40519 = G__40524;
continue;
}
} else
{var temp__4126__auto___40525 = cljs.core.seq.call(null,seq__40512_40516);if(temp__4126__auto___40525)
{var seq__40512_40526__$1 = temp__4126__auto___40525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40512_40526__$1))
{var c__4406__auto___40527 = cljs.core.chunk_first.call(null,seq__40512_40526__$1);{
var G__40528 = cljs.core.chunk_rest.call(null,seq__40512_40526__$1);
var G__40529 = c__4406__auto___40527;
var G__40530 = cljs.core.count.call(null,c__4406__auto___40527);
var G__40531 = (0);
seq__40512_40516 = G__40528;
chunk__40513_40517 = G__40529;
count__40514_40518 = G__40530;
i__40515_40519 = G__40531;
continue;
}
} else
{var n_40532 = cljs.core.first.call(null,seq__40512_40526__$1);goog.style.setStyle(n_40532,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40533 = cljs.core.next.call(null,seq__40512_40526__$1);
var G__40534 = null;
var G__40535 = (0);
var G__40536 = (0);
seq__40512_40516 = G__40533;
chunk__40513_40517 = G__40534;
count__40514_40518 = G__40535;
i__40515_40519 = G__40536;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__40537){
var content = cljs.core.first(arglist__40537);
arglist__40537 = cljs.core.next(arglist__40537);
var name = cljs.core.first(arglist__40537);
var value = cljs.core.rest(arglist__40537);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__40542_40546 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40543_40547 = null;var count__40544_40548 = (0);var i__40545_40549 = (0);while(true){
if((i__40545_40549 < count__40544_40548))
{var n_40550 = cljs.core._nth.call(null,chunk__40543_40547,i__40545_40549);n_40550.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40551 = seq__40542_40546;
var G__40552 = chunk__40543_40547;
var G__40553 = count__40544_40548;
var G__40554 = (i__40545_40549 + (1));
seq__40542_40546 = G__40551;
chunk__40543_40547 = G__40552;
count__40544_40548 = G__40553;
i__40545_40549 = G__40554;
continue;
}
} else
{var temp__4126__auto___40555 = cljs.core.seq.call(null,seq__40542_40546);if(temp__4126__auto___40555)
{var seq__40542_40556__$1 = temp__4126__auto___40555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40542_40556__$1))
{var c__4406__auto___40557 = cljs.core.chunk_first.call(null,seq__40542_40556__$1);{
var G__40558 = cljs.core.chunk_rest.call(null,seq__40542_40556__$1);
var G__40559 = c__4406__auto___40557;
var G__40560 = cljs.core.count.call(null,c__4406__auto___40557);
var G__40561 = (0);
seq__40542_40546 = G__40558;
chunk__40543_40547 = G__40559;
count__40544_40548 = G__40560;
i__40545_40549 = G__40561;
continue;
}
} else
{var n_40562 = cljs.core.first.call(null,seq__40542_40556__$1);n_40562.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__40563 = cljs.core.next.call(null,seq__40542_40556__$1);
var G__40564 = null;
var G__40565 = (0);
var G__40566 = (0);
seq__40542_40546 = G__40563;
chunk__40543_40547 = G__40564;
count__40544_40548 = G__40565;
i__40545_40549 = G__40566;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__40567){
var content = cljs.core.first(arglist__40567);
arglist__40567 = cljs.core.next(arglist__40567);
var name = cljs.core.first(arglist__40567);
var value = cljs.core.rest(arglist__40567);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__40572_40576 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40573_40577 = null;var count__40574_40578 = (0);var i__40575_40579 = (0);while(true){
if((i__40575_40579 < count__40574_40578))
{var n_40580 = cljs.core._nth.call(null,chunk__40573_40577,i__40575_40579);n_40580.removeAttribute(cljs.core.name.call(null,name));
{
var G__40581 = seq__40572_40576;
var G__40582 = chunk__40573_40577;
var G__40583 = count__40574_40578;
var G__40584 = (i__40575_40579 + (1));
seq__40572_40576 = G__40581;
chunk__40573_40577 = G__40582;
count__40574_40578 = G__40583;
i__40575_40579 = G__40584;
continue;
}
} else
{var temp__4126__auto___40585 = cljs.core.seq.call(null,seq__40572_40576);if(temp__4126__auto___40585)
{var seq__40572_40586__$1 = temp__4126__auto___40585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40572_40586__$1))
{var c__4406__auto___40587 = cljs.core.chunk_first.call(null,seq__40572_40586__$1);{
var G__40588 = cljs.core.chunk_rest.call(null,seq__40572_40586__$1);
var G__40589 = c__4406__auto___40587;
var G__40590 = cljs.core.count.call(null,c__4406__auto___40587);
var G__40591 = (0);
seq__40572_40576 = G__40588;
chunk__40573_40577 = G__40589;
count__40574_40578 = G__40590;
i__40575_40579 = G__40591;
continue;
}
} else
{var n_40592 = cljs.core.first.call(null,seq__40572_40586__$1);n_40592.removeAttribute(cljs.core.name.call(null,name));
{
var G__40593 = cljs.core.next.call(null,seq__40572_40586__$1);
var G__40594 = null;
var G__40595 = (0);
var G__40596 = (0);
seq__40572_40576 = G__40593;
chunk__40573_40577 = G__40594;
count__40574_40578 = G__40595;
i__40575_40579 = G__40596;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__40598 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__40598,(0),null);var v = cljs.core.nth.call(null,vec__40598,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
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
return (function (p1__40599_SHARP_){var attr = attrs__$1.item(p1__40599_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__40606_40612 = cljs.core.seq.call(null,styles);var chunk__40607_40613 = null;var count__40608_40614 = (0);var i__40609_40615 = (0);while(true){
if((i__40609_40615 < count__40608_40614))
{var vec__40610_40616 = cljs.core._nth.call(null,chunk__40607_40613,i__40609_40615);var name_40617 = cljs.core.nth.call(null,vec__40610_40616,(0),null);var value_40618 = cljs.core.nth.call(null,vec__40610_40616,(1),null);domina.set_style_BANG_.call(null,content,name_40617,value_40618);
{
var G__40619 = seq__40606_40612;
var G__40620 = chunk__40607_40613;
var G__40621 = count__40608_40614;
var G__40622 = (i__40609_40615 + (1));
seq__40606_40612 = G__40619;
chunk__40607_40613 = G__40620;
count__40608_40614 = G__40621;
i__40609_40615 = G__40622;
continue;
}
} else
{var temp__4126__auto___40623 = cljs.core.seq.call(null,seq__40606_40612);if(temp__4126__auto___40623)
{var seq__40606_40624__$1 = temp__4126__auto___40623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40606_40624__$1))
{var c__4406__auto___40625 = cljs.core.chunk_first.call(null,seq__40606_40624__$1);{
var G__40626 = cljs.core.chunk_rest.call(null,seq__40606_40624__$1);
var G__40627 = c__4406__auto___40625;
var G__40628 = cljs.core.count.call(null,c__4406__auto___40625);
var G__40629 = (0);
seq__40606_40612 = G__40626;
chunk__40607_40613 = G__40627;
count__40608_40614 = G__40628;
i__40609_40615 = G__40629;
continue;
}
} else
{var vec__40611_40630 = cljs.core.first.call(null,seq__40606_40624__$1);var name_40631 = cljs.core.nth.call(null,vec__40611_40630,(0),null);var value_40632 = cljs.core.nth.call(null,vec__40611_40630,(1),null);domina.set_style_BANG_.call(null,content,name_40631,value_40632);
{
var G__40633 = cljs.core.next.call(null,seq__40606_40624__$1);
var G__40634 = null;
var G__40635 = (0);
var G__40636 = (0);
seq__40606_40612 = G__40633;
chunk__40607_40613 = G__40634;
count__40608_40614 = G__40635;
i__40609_40615 = G__40636;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__40643_40649 = cljs.core.seq.call(null,attrs);var chunk__40644_40650 = null;var count__40645_40651 = (0);var i__40646_40652 = (0);while(true){
if((i__40646_40652 < count__40645_40651))
{var vec__40647_40653 = cljs.core._nth.call(null,chunk__40644_40650,i__40646_40652);var name_40654 = cljs.core.nth.call(null,vec__40647_40653,(0),null);var value_40655 = cljs.core.nth.call(null,vec__40647_40653,(1),null);domina.set_attr_BANG_.call(null,content,name_40654,value_40655);
{
var G__40656 = seq__40643_40649;
var G__40657 = chunk__40644_40650;
var G__40658 = count__40645_40651;
var G__40659 = (i__40646_40652 + (1));
seq__40643_40649 = G__40656;
chunk__40644_40650 = G__40657;
count__40645_40651 = G__40658;
i__40646_40652 = G__40659;
continue;
}
} else
{var temp__4126__auto___40660 = cljs.core.seq.call(null,seq__40643_40649);if(temp__4126__auto___40660)
{var seq__40643_40661__$1 = temp__4126__auto___40660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40643_40661__$1))
{var c__4406__auto___40662 = cljs.core.chunk_first.call(null,seq__40643_40661__$1);{
var G__40663 = cljs.core.chunk_rest.call(null,seq__40643_40661__$1);
var G__40664 = c__4406__auto___40662;
var G__40665 = cljs.core.count.call(null,c__4406__auto___40662);
var G__40666 = (0);
seq__40643_40649 = G__40663;
chunk__40644_40650 = G__40664;
count__40645_40651 = G__40665;
i__40646_40652 = G__40666;
continue;
}
} else
{var vec__40648_40667 = cljs.core.first.call(null,seq__40643_40661__$1);var name_40668 = cljs.core.nth.call(null,vec__40648_40667,(0),null);var value_40669 = cljs.core.nth.call(null,vec__40648_40667,(1),null);domina.set_attr_BANG_.call(null,content,name_40668,value_40669);
{
var G__40670 = cljs.core.next.call(null,seq__40643_40661__$1);
var G__40671 = null;
var G__40672 = (0);
var G__40673 = (0);
seq__40643_40649 = G__40670;
chunk__40644_40650 = G__40671;
count__40645_40651 = G__40672;
i__40646_40652 = G__40673;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__40678_40682 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40679_40683 = null;var count__40680_40684 = (0);var i__40681_40685 = (0);while(true){
if((i__40681_40685 < count__40680_40684))
{var node_40686 = cljs.core._nth.call(null,chunk__40679_40683,i__40681_40685);goog.dom.classes.add(node_40686,class$);
{
var G__40687 = seq__40678_40682;
var G__40688 = chunk__40679_40683;
var G__40689 = count__40680_40684;
var G__40690 = (i__40681_40685 + (1));
seq__40678_40682 = G__40687;
chunk__40679_40683 = G__40688;
count__40680_40684 = G__40689;
i__40681_40685 = G__40690;
continue;
}
} else
{var temp__4126__auto___40691 = cljs.core.seq.call(null,seq__40678_40682);if(temp__4126__auto___40691)
{var seq__40678_40692__$1 = temp__4126__auto___40691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40678_40692__$1))
{var c__4406__auto___40693 = cljs.core.chunk_first.call(null,seq__40678_40692__$1);{
var G__40694 = cljs.core.chunk_rest.call(null,seq__40678_40692__$1);
var G__40695 = c__4406__auto___40693;
var G__40696 = cljs.core.count.call(null,c__4406__auto___40693);
var G__40697 = (0);
seq__40678_40682 = G__40694;
chunk__40679_40683 = G__40695;
count__40680_40684 = G__40696;
i__40681_40685 = G__40697;
continue;
}
} else
{var node_40698 = cljs.core.first.call(null,seq__40678_40692__$1);goog.dom.classes.add(node_40698,class$);
{
var G__40699 = cljs.core.next.call(null,seq__40678_40692__$1);
var G__40700 = null;
var G__40701 = (0);
var G__40702 = (0);
seq__40678_40682 = G__40699;
chunk__40679_40683 = G__40700;
count__40680_40684 = G__40701;
i__40681_40685 = G__40702;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__40707_40711 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40708_40712 = null;var count__40709_40713 = (0);var i__40710_40714 = (0);while(true){
if((i__40710_40714 < count__40709_40713))
{var node_40715 = cljs.core._nth.call(null,chunk__40708_40712,i__40710_40714);goog.dom.classes.remove(node_40715,class$);
{
var G__40716 = seq__40707_40711;
var G__40717 = chunk__40708_40712;
var G__40718 = count__40709_40713;
var G__40719 = (i__40710_40714 + (1));
seq__40707_40711 = G__40716;
chunk__40708_40712 = G__40717;
count__40709_40713 = G__40718;
i__40710_40714 = G__40719;
continue;
}
} else
{var temp__4126__auto___40720 = cljs.core.seq.call(null,seq__40707_40711);if(temp__4126__auto___40720)
{var seq__40707_40721__$1 = temp__4126__auto___40720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40707_40721__$1))
{var c__4406__auto___40722 = cljs.core.chunk_first.call(null,seq__40707_40721__$1);{
var G__40723 = cljs.core.chunk_rest.call(null,seq__40707_40721__$1);
var G__40724 = c__4406__auto___40722;
var G__40725 = cljs.core.count.call(null,c__4406__auto___40722);
var G__40726 = (0);
seq__40707_40711 = G__40723;
chunk__40708_40712 = G__40724;
count__40709_40713 = G__40725;
i__40710_40714 = G__40726;
continue;
}
} else
{var node_40727 = cljs.core.first.call(null,seq__40707_40721__$1);goog.dom.classes.remove(node_40727,class$);
{
var G__40728 = cljs.core.next.call(null,seq__40707_40721__$1);
var G__40729 = null;
var G__40730 = (0);
var G__40731 = (0);
seq__40707_40711 = G__40728;
chunk__40708_40712 = G__40729;
count__40709_40713 = G__40730;
i__40710_40714 = G__40731;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__40736_40740 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40737_40741 = null;var count__40738_40742 = (0);var i__40739_40743 = (0);while(true){
if((i__40739_40743 < count__40738_40742))
{var node_40744 = cljs.core._nth.call(null,chunk__40737_40741,i__40739_40743);goog.dom.classes.toggle(node_40744,class$);
{
var G__40745 = seq__40736_40740;
var G__40746 = chunk__40737_40741;
var G__40747 = count__40738_40742;
var G__40748 = (i__40739_40743 + (1));
seq__40736_40740 = G__40745;
chunk__40737_40741 = G__40746;
count__40738_40742 = G__40747;
i__40739_40743 = G__40748;
continue;
}
} else
{var temp__4126__auto___40749 = cljs.core.seq.call(null,seq__40736_40740);if(temp__4126__auto___40749)
{var seq__40736_40750__$1 = temp__4126__auto___40749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40736_40750__$1))
{var c__4406__auto___40751 = cljs.core.chunk_first.call(null,seq__40736_40750__$1);{
var G__40752 = cljs.core.chunk_rest.call(null,seq__40736_40750__$1);
var G__40753 = c__4406__auto___40751;
var G__40754 = cljs.core.count.call(null,c__4406__auto___40751);
var G__40755 = (0);
seq__40736_40740 = G__40752;
chunk__40737_40741 = G__40753;
count__40738_40742 = G__40754;
i__40739_40743 = G__40755;
continue;
}
} else
{var node_40756 = cljs.core.first.call(null,seq__40736_40750__$1);goog.dom.classes.toggle(node_40756,class$);
{
var G__40757 = cljs.core.next.call(null,seq__40736_40750__$1);
var G__40758 = null;
var G__40759 = (0);
var G__40760 = (0);
seq__40736_40740 = G__40757;
chunk__40737_40741 = G__40758;
count__40738_40742 = G__40759;
i__40739_40743 = G__40760;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_40769__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__40765_40770 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40766_40771 = null;var count__40767_40772 = (0);var i__40768_40773 = (0);while(true){
if((i__40768_40773 < count__40767_40772))
{var node_40774 = cljs.core._nth.call(null,chunk__40766_40771,i__40768_40773);goog.dom.classes.set(node_40774,classes_40769__$1);
{
var G__40775 = seq__40765_40770;
var G__40776 = chunk__40766_40771;
var G__40777 = count__40767_40772;
var G__40778 = (i__40768_40773 + (1));
seq__40765_40770 = G__40775;
chunk__40766_40771 = G__40776;
count__40767_40772 = G__40777;
i__40768_40773 = G__40778;
continue;
}
} else
{var temp__4126__auto___40779 = cljs.core.seq.call(null,seq__40765_40770);if(temp__4126__auto___40779)
{var seq__40765_40780__$1 = temp__4126__auto___40779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40765_40780__$1))
{var c__4406__auto___40781 = cljs.core.chunk_first.call(null,seq__40765_40780__$1);{
var G__40782 = cljs.core.chunk_rest.call(null,seq__40765_40780__$1);
var G__40783 = c__4406__auto___40781;
var G__40784 = cljs.core.count.call(null,c__4406__auto___40781);
var G__40785 = (0);
seq__40765_40770 = G__40782;
chunk__40766_40771 = G__40783;
count__40767_40772 = G__40784;
i__40768_40773 = G__40785;
continue;
}
} else
{var node_40786 = cljs.core.first.call(null,seq__40765_40780__$1);goog.dom.classes.set(node_40786,classes_40769__$1);
{
var G__40787 = cljs.core.next.call(null,seq__40765_40780__$1);
var G__40788 = null;
var G__40789 = (0);
var G__40790 = (0);
seq__40765_40770 = G__40787;
chunk__40766_40771 = G__40788;
count__40767_40772 = G__40789;
i__40768_40773 = G__40790;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__40795_40799 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40796_40800 = null;var count__40797_40801 = (0);var i__40798_40802 = (0);while(true){
if((i__40798_40802 < count__40797_40801))
{var node_40803 = cljs.core._nth.call(null,chunk__40796_40800,i__40798_40802);goog.dom.setTextContent(node_40803,value);
{
var G__40804 = seq__40795_40799;
var G__40805 = chunk__40796_40800;
var G__40806 = count__40797_40801;
var G__40807 = (i__40798_40802 + (1));
seq__40795_40799 = G__40804;
chunk__40796_40800 = G__40805;
count__40797_40801 = G__40806;
i__40798_40802 = G__40807;
continue;
}
} else
{var temp__4126__auto___40808 = cljs.core.seq.call(null,seq__40795_40799);if(temp__4126__auto___40808)
{var seq__40795_40809__$1 = temp__4126__auto___40808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40795_40809__$1))
{var c__4406__auto___40810 = cljs.core.chunk_first.call(null,seq__40795_40809__$1);{
var G__40811 = cljs.core.chunk_rest.call(null,seq__40795_40809__$1);
var G__40812 = c__4406__auto___40810;
var G__40813 = cljs.core.count.call(null,c__4406__auto___40810);
var G__40814 = (0);
seq__40795_40799 = G__40811;
chunk__40796_40800 = G__40812;
count__40797_40801 = G__40813;
i__40798_40802 = G__40814;
continue;
}
} else
{var node_40815 = cljs.core.first.call(null,seq__40795_40809__$1);goog.dom.setTextContent(node_40815,value);
{
var G__40816 = cljs.core.next.call(null,seq__40795_40809__$1);
var G__40817 = null;
var G__40818 = (0);
var G__40819 = (0);
seq__40795_40799 = G__40816;
chunk__40796_40800 = G__40817;
count__40797_40801 = G__40818;
i__40798_40802 = G__40819;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__40824_40828 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40825_40829 = null;var count__40826_40830 = (0);var i__40827_40831 = (0);while(true){
if((i__40827_40831 < count__40826_40830))
{var node_40832 = cljs.core._nth.call(null,chunk__40825_40829,i__40827_40831);goog.dom.forms.setValue(node_40832,value);
{
var G__40833 = seq__40824_40828;
var G__40834 = chunk__40825_40829;
var G__40835 = count__40826_40830;
var G__40836 = (i__40827_40831 + (1));
seq__40824_40828 = G__40833;
chunk__40825_40829 = G__40834;
count__40826_40830 = G__40835;
i__40827_40831 = G__40836;
continue;
}
} else
{var temp__4126__auto___40837 = cljs.core.seq.call(null,seq__40824_40828);if(temp__4126__auto___40837)
{var seq__40824_40838__$1 = temp__4126__auto___40837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40824_40838__$1))
{var c__4406__auto___40839 = cljs.core.chunk_first.call(null,seq__40824_40838__$1);{
var G__40840 = cljs.core.chunk_rest.call(null,seq__40824_40838__$1);
var G__40841 = c__4406__auto___40839;
var G__40842 = cljs.core.count.call(null,c__4406__auto___40839);
var G__40843 = (0);
seq__40824_40828 = G__40840;
chunk__40825_40829 = G__40841;
count__40826_40830 = G__40842;
i__40827_40831 = G__40843;
continue;
}
} else
{var node_40844 = cljs.core.first.call(null,seq__40824_40838__$1);goog.dom.forms.setValue(node_40844,value);
{
var G__40845 = cljs.core.next.call(null,seq__40824_40838__$1);
var G__40846 = null;
var G__40847 = (0);
var G__40848 = (0);
seq__40824_40828 = G__40845;
chunk__40825_40829 = G__40846;
count__40826_40830 = G__40847;
i__40827_40831 = G__40848;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_40859 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__40855_40860 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__40856_40861 = null;var count__40857_40862 = (0);var i__40858_40863 = (0);while(true){
if((i__40858_40863 < count__40857_40862))
{var node_40864 = cljs.core._nth.call(null,chunk__40856_40861,i__40858_40863);node_40864.innerHTML = value_40859;
{
var G__40865 = seq__40855_40860;
var G__40866 = chunk__40856_40861;
var G__40867 = count__40857_40862;
var G__40868 = (i__40858_40863 + (1));
seq__40855_40860 = G__40865;
chunk__40856_40861 = G__40866;
count__40857_40862 = G__40867;
i__40858_40863 = G__40868;
continue;
}
} else
{var temp__4126__auto___40869 = cljs.core.seq.call(null,seq__40855_40860);if(temp__4126__auto___40869)
{var seq__40855_40870__$1 = temp__4126__auto___40869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40855_40870__$1))
{var c__4406__auto___40871 = cljs.core.chunk_first.call(null,seq__40855_40870__$1);{
var G__40872 = cljs.core.chunk_rest.call(null,seq__40855_40870__$1);
var G__40873 = c__4406__auto___40871;
var G__40874 = cljs.core.count.call(null,c__4406__auto___40871);
var G__40875 = (0);
seq__40855_40860 = G__40872;
chunk__40856_40861 = G__40873;
count__40857_40862 = G__40874;
i__40858_40863 = G__40875;
continue;
}
} else
{var node_40876 = cljs.core.first.call(null,seq__40855_40870__$1);node_40876.innerHTML = value_40859;
{
var G__40877 = cljs.core.next.call(null,seq__40855_40870__$1);
var G__40878 = null;
var G__40879 = (0);
var G__40880 = (0);
seq__40855_40860 = G__40877;
chunk__40856_40861 = G__40878;
count__40857_40862 = G__40879;
i__40858_40863 = G__40880;
continue;
}
}
} else
{}
}
break;
}
}catch (e40854){if((e40854 instanceof Error))
{var e_40881 = e40854;domina.replace_children_BANG_.call(null,content,value_40859);
} else
{throw e40854;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__40888_40892 = cljs.core.seq.call(null,children);var chunk__40889_40893 = null;var count__40890_40894 = (0);var i__40891_40895 = (0);while(true){
if((i__40891_40895 < count__40890_40894))
{var child_40896 = cljs.core._nth.call(null,chunk__40889_40893,i__40891_40895);frag.appendChild(child_40896);
{
var G__40897 = seq__40888_40892;
var G__40898 = chunk__40889_40893;
var G__40899 = count__40890_40894;
var G__40900 = (i__40891_40895 + (1));
seq__40888_40892 = G__40897;
chunk__40889_40893 = G__40898;
count__40890_40894 = G__40899;
i__40891_40895 = G__40900;
continue;
}
} else
{var temp__4126__auto___40901 = cljs.core.seq.call(null,seq__40888_40892);if(temp__4126__auto___40901)
{var seq__40888_40902__$1 = temp__4126__auto___40901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40888_40902__$1))
{var c__4406__auto___40903 = cljs.core.chunk_first.call(null,seq__40888_40902__$1);{
var G__40904 = cljs.core.chunk_rest.call(null,seq__40888_40902__$1);
var G__40905 = c__4406__auto___40903;
var G__40906 = cljs.core.count.call(null,c__4406__auto___40903);
var G__40907 = (0);
seq__40888_40892 = G__40904;
chunk__40889_40893 = G__40905;
count__40890_40894 = G__40906;
i__40891_40895 = G__40907;
continue;
}
} else
{var child_40908 = cljs.core.first.call(null,seq__40888_40902__$1);frag.appendChild(child_40908);
{
var G__40909 = cljs.core.next.call(null,seq__40888_40902__$1);
var G__40910 = null;
var G__40911 = (0);
var G__40912 = (0);
seq__40888_40892 = G__40909;
chunk__40889_40893 = G__40910;
count__40890_40894 = G__40911;
i__40891_40895 = G__40912;
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
return (function (p1__40882_SHARP_,p2__40883_SHARP_){return f.call(null,p1__40882_SHARP_,p2__40883_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
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
{if((function (){var G__40914 = list_thing;if(G__40914)
{var bit__4300__auto__ = (G__40914.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__40914.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40914);
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
{if((function (){var G__40915 = content;if(G__40915)
{var bit__4300__auto__ = (G__40915.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__40915.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40915.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40915);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40915);
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
{if((function (){var G__40916 = content;if(G__40916)
{var bit__4300__auto__ = (G__40916.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__40916.cljs$core$ISeqable$))
{return true;
} else
{if((!G__40916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40916);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__40916);
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
