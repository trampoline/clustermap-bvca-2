// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_17513 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17514 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17515 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17514,table_section_wrapper_17514,opt_wrapper_17513,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17515,table_section_wrapper_17514,cell_wrapper_17515,opt_wrapper_17513,table_section_wrapper_17514,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17514]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17520 = cljs.core.seq.call(null,tbody);var chunk__17521 = null;var count__17522 = 0;var i__17523 = 0;while(true){
if((i__17523 < count__17522))
{var child = cljs.core._nth.call(null,chunk__17521,i__17523);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17524 = seq__17520;
var G__17525 = chunk__17521;
var G__17526 = count__17522;
var G__17527 = (i__17523 + 1);
seq__17520 = G__17524;
chunk__17521 = G__17525;
count__17522 = G__17526;
i__17523 = G__17527;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17520);if(temp__4092__auto__)
{var seq__17520__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17520__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17520__$1);{
var G__17528 = cljs.core.chunk_rest.call(null,seq__17520__$1);
var G__17529 = c__4189__auto__;
var G__17530 = cljs.core.count.call(null,c__4189__auto__);
var G__17531 = 0;
seq__17520 = G__17528;
chunk__17521 = G__17529;
count__17522 = G__17530;
i__17523 = G__17531;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17520__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17532 = cljs.core.next.call(null,seq__17520__$1);
var G__17533 = null;
var G__17534 = 0;
var G__17535 = 0;
seq__17520 = G__17532;
chunk__17521 = G__17533;
count__17522 = G__17534;
i__17523 = G__17535;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17537 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17537,0,null);var start_wrap = cljs.core.nth.call(null,vec__17537,1,null);var end_wrap = cljs.core.nth.call(null,vec__17537,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17538 = wrapper.lastChild;
var G__17539 = (level - 1);
wrapper = G__17538;
level = G__17539;
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
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
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
domina.DomContent = (function (){var obj17541 = {};return obj17541;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__17542){
var mesg = cljs.core.seq(arglist__17542);
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
log.cljs$lang$applyTo = (function (arglist__17543){
var mesg = cljs.core.seq(arglist__17543);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__17544){
var contents = cljs.core.seq(arglist__17544);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17545_SHARP_){return p1__17545_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17546_SHARP_,p2__17547_SHARP_){return goog.dom.insertChildAt(p1__17546_SHARP_,p2__17547_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17549_SHARP_,p2__17548_SHARP_){return goog.dom.insertSiblingBefore(p2__17548_SHARP_,p1__17549_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17551_SHARP_,p2__17550_SHARP_){return goog.dom.insertSiblingAfter(p2__17550_SHARP_,p1__17551_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17553_SHARP_,p2__17552_SHARP_){return goog.dom.replaceNode(p2__17552_SHARP_,p1__17553_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__17558_17562 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17559_17563 = null;var count__17560_17564 = 0;var i__17561_17565 = 0;while(true){
if((i__17561_17565 < count__17560_17564))
{var n_17566 = cljs.core._nth.call(null,chunk__17559_17563,i__17561_17565);goog.style.setStyle(n_17566,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17567 = seq__17558_17562;
var G__17568 = chunk__17559_17563;
var G__17569 = count__17560_17564;
var G__17570 = (i__17561_17565 + 1);
seq__17558_17562 = G__17567;
chunk__17559_17563 = G__17568;
count__17560_17564 = G__17569;
i__17561_17565 = G__17570;
continue;
}
} else
{var temp__4092__auto___17571 = cljs.core.seq.call(null,seq__17558_17562);if(temp__4092__auto___17571)
{var seq__17558_17572__$1 = temp__4092__auto___17571;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17558_17572__$1))
{var c__4189__auto___17573 = cljs.core.chunk_first.call(null,seq__17558_17572__$1);{
var G__17574 = cljs.core.chunk_rest.call(null,seq__17558_17572__$1);
var G__17575 = c__4189__auto___17573;
var G__17576 = cljs.core.count.call(null,c__4189__auto___17573);
var G__17577 = 0;
seq__17558_17562 = G__17574;
chunk__17559_17563 = G__17575;
count__17560_17564 = G__17576;
i__17561_17565 = G__17577;
continue;
}
} else
{var n_17578 = cljs.core.first.call(null,seq__17558_17572__$1);goog.style.setStyle(n_17578,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17579 = cljs.core.next.call(null,seq__17558_17572__$1);
var G__17580 = null;
var G__17581 = 0;
var G__17582 = 0;
seq__17558_17562 = G__17579;
chunk__17559_17563 = G__17580;
count__17560_17564 = G__17581;
i__17561_17565 = G__17582;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17583){
var content = cljs.core.first(arglist__17583);
arglist__17583 = cljs.core.next(arglist__17583);
var name = cljs.core.first(arglist__17583);
var value = cljs.core.rest(arglist__17583);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__17588_17592 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17589_17593 = null;var count__17590_17594 = 0;var i__17591_17595 = 0;while(true){
if((i__17591_17595 < count__17590_17594))
{var n_17596 = cljs.core._nth.call(null,chunk__17589_17593,i__17591_17595);n_17596.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17597 = seq__17588_17592;
var G__17598 = chunk__17589_17593;
var G__17599 = count__17590_17594;
var G__17600 = (i__17591_17595 + 1);
seq__17588_17592 = G__17597;
chunk__17589_17593 = G__17598;
count__17590_17594 = G__17599;
i__17591_17595 = G__17600;
continue;
}
} else
{var temp__4092__auto___17601 = cljs.core.seq.call(null,seq__17588_17592);if(temp__4092__auto___17601)
{var seq__17588_17602__$1 = temp__4092__auto___17601;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17588_17602__$1))
{var c__4189__auto___17603 = cljs.core.chunk_first.call(null,seq__17588_17602__$1);{
var G__17604 = cljs.core.chunk_rest.call(null,seq__17588_17602__$1);
var G__17605 = c__4189__auto___17603;
var G__17606 = cljs.core.count.call(null,c__4189__auto___17603);
var G__17607 = 0;
seq__17588_17592 = G__17604;
chunk__17589_17593 = G__17605;
count__17590_17594 = G__17606;
i__17591_17595 = G__17607;
continue;
}
} else
{var n_17608 = cljs.core.first.call(null,seq__17588_17602__$1);n_17608.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17609 = cljs.core.next.call(null,seq__17588_17602__$1);
var G__17610 = null;
var G__17611 = 0;
var G__17612 = 0;
seq__17588_17592 = G__17609;
chunk__17589_17593 = G__17610;
count__17590_17594 = G__17611;
i__17591_17595 = G__17612;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17613){
var content = cljs.core.first(arglist__17613);
arglist__17613 = cljs.core.next(arglist__17613);
var name = cljs.core.first(arglist__17613);
var value = cljs.core.rest(arglist__17613);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17618_17622 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17619_17623 = null;var count__17620_17624 = 0;var i__17621_17625 = 0;while(true){
if((i__17621_17625 < count__17620_17624))
{var n_17626 = cljs.core._nth.call(null,chunk__17619_17623,i__17621_17625);n_17626.removeAttribute(cljs.core.name.call(null,name));
{
var G__17627 = seq__17618_17622;
var G__17628 = chunk__17619_17623;
var G__17629 = count__17620_17624;
var G__17630 = (i__17621_17625 + 1);
seq__17618_17622 = G__17627;
chunk__17619_17623 = G__17628;
count__17620_17624 = G__17629;
i__17621_17625 = G__17630;
continue;
}
} else
{var temp__4092__auto___17631 = cljs.core.seq.call(null,seq__17618_17622);if(temp__4092__auto___17631)
{var seq__17618_17632__$1 = temp__4092__auto___17631;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17618_17632__$1))
{var c__4189__auto___17633 = cljs.core.chunk_first.call(null,seq__17618_17632__$1);{
var G__17634 = cljs.core.chunk_rest.call(null,seq__17618_17632__$1);
var G__17635 = c__4189__auto___17633;
var G__17636 = cljs.core.count.call(null,c__4189__auto___17633);
var G__17637 = 0;
seq__17618_17622 = G__17634;
chunk__17619_17623 = G__17635;
count__17620_17624 = G__17636;
i__17621_17625 = G__17637;
continue;
}
} else
{var n_17638 = cljs.core.first.call(null,seq__17618_17632__$1);n_17638.removeAttribute(cljs.core.name.call(null,name));
{
var G__17639 = cljs.core.next.call(null,seq__17618_17632__$1);
var G__17640 = null;
var G__17641 = 0;
var G__17642 = 0;
seq__17618_17622 = G__17639;
chunk__17619_17623 = G__17640;
count__17620_17624 = G__17641;
i__17621_17625 = G__17642;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17644 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17644,0,null);var v = cljs.core.nth.call(null,vec__17644,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17645_SHARP_){var attr = attrs__$1.item(p1__17645_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17652_17658 = cljs.core.seq.call(null,styles);var chunk__17653_17659 = null;var count__17654_17660 = 0;var i__17655_17661 = 0;while(true){
if((i__17655_17661 < count__17654_17660))
{var vec__17656_17662 = cljs.core._nth.call(null,chunk__17653_17659,i__17655_17661);var name_17663 = cljs.core.nth.call(null,vec__17656_17662,0,null);var value_17664 = cljs.core.nth.call(null,vec__17656_17662,1,null);domina.set_style_BANG_.call(null,content,name_17663,value_17664);
{
var G__17665 = seq__17652_17658;
var G__17666 = chunk__17653_17659;
var G__17667 = count__17654_17660;
var G__17668 = (i__17655_17661 + 1);
seq__17652_17658 = G__17665;
chunk__17653_17659 = G__17666;
count__17654_17660 = G__17667;
i__17655_17661 = G__17668;
continue;
}
} else
{var temp__4092__auto___17669 = cljs.core.seq.call(null,seq__17652_17658);if(temp__4092__auto___17669)
{var seq__17652_17670__$1 = temp__4092__auto___17669;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17652_17670__$1))
{var c__4189__auto___17671 = cljs.core.chunk_first.call(null,seq__17652_17670__$1);{
var G__17672 = cljs.core.chunk_rest.call(null,seq__17652_17670__$1);
var G__17673 = c__4189__auto___17671;
var G__17674 = cljs.core.count.call(null,c__4189__auto___17671);
var G__17675 = 0;
seq__17652_17658 = G__17672;
chunk__17653_17659 = G__17673;
count__17654_17660 = G__17674;
i__17655_17661 = G__17675;
continue;
}
} else
{var vec__17657_17676 = cljs.core.first.call(null,seq__17652_17670__$1);var name_17677 = cljs.core.nth.call(null,vec__17657_17676,0,null);var value_17678 = cljs.core.nth.call(null,vec__17657_17676,1,null);domina.set_style_BANG_.call(null,content,name_17677,value_17678);
{
var G__17679 = cljs.core.next.call(null,seq__17652_17670__$1);
var G__17680 = null;
var G__17681 = 0;
var G__17682 = 0;
seq__17652_17658 = G__17679;
chunk__17653_17659 = G__17680;
count__17654_17660 = G__17681;
i__17655_17661 = G__17682;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17689_17695 = cljs.core.seq.call(null,attrs);var chunk__17690_17696 = null;var count__17691_17697 = 0;var i__17692_17698 = 0;while(true){
if((i__17692_17698 < count__17691_17697))
{var vec__17693_17699 = cljs.core._nth.call(null,chunk__17690_17696,i__17692_17698);var name_17700 = cljs.core.nth.call(null,vec__17693_17699,0,null);var value_17701 = cljs.core.nth.call(null,vec__17693_17699,1,null);domina.set_attr_BANG_.call(null,content,name_17700,value_17701);
{
var G__17702 = seq__17689_17695;
var G__17703 = chunk__17690_17696;
var G__17704 = count__17691_17697;
var G__17705 = (i__17692_17698 + 1);
seq__17689_17695 = G__17702;
chunk__17690_17696 = G__17703;
count__17691_17697 = G__17704;
i__17692_17698 = G__17705;
continue;
}
} else
{var temp__4092__auto___17706 = cljs.core.seq.call(null,seq__17689_17695);if(temp__4092__auto___17706)
{var seq__17689_17707__$1 = temp__4092__auto___17706;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17689_17707__$1))
{var c__4189__auto___17708 = cljs.core.chunk_first.call(null,seq__17689_17707__$1);{
var G__17709 = cljs.core.chunk_rest.call(null,seq__17689_17707__$1);
var G__17710 = c__4189__auto___17708;
var G__17711 = cljs.core.count.call(null,c__4189__auto___17708);
var G__17712 = 0;
seq__17689_17695 = G__17709;
chunk__17690_17696 = G__17710;
count__17691_17697 = G__17711;
i__17692_17698 = G__17712;
continue;
}
} else
{var vec__17694_17713 = cljs.core.first.call(null,seq__17689_17707__$1);var name_17714 = cljs.core.nth.call(null,vec__17694_17713,0,null);var value_17715 = cljs.core.nth.call(null,vec__17694_17713,1,null);domina.set_attr_BANG_.call(null,content,name_17714,value_17715);
{
var G__17716 = cljs.core.next.call(null,seq__17689_17707__$1);
var G__17717 = null;
var G__17718 = 0;
var G__17719 = 0;
seq__17689_17695 = G__17716;
chunk__17690_17696 = G__17717;
count__17691_17697 = G__17718;
i__17692_17698 = G__17719;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17724_17728 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17725_17729 = null;var count__17726_17730 = 0;var i__17727_17731 = 0;while(true){
if((i__17727_17731 < count__17726_17730))
{var node_17732 = cljs.core._nth.call(null,chunk__17725_17729,i__17727_17731);goog.dom.classes.add(node_17732,class$);
{
var G__17733 = seq__17724_17728;
var G__17734 = chunk__17725_17729;
var G__17735 = count__17726_17730;
var G__17736 = (i__17727_17731 + 1);
seq__17724_17728 = G__17733;
chunk__17725_17729 = G__17734;
count__17726_17730 = G__17735;
i__17727_17731 = G__17736;
continue;
}
} else
{var temp__4092__auto___17737 = cljs.core.seq.call(null,seq__17724_17728);if(temp__4092__auto___17737)
{var seq__17724_17738__$1 = temp__4092__auto___17737;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17724_17738__$1))
{var c__4189__auto___17739 = cljs.core.chunk_first.call(null,seq__17724_17738__$1);{
var G__17740 = cljs.core.chunk_rest.call(null,seq__17724_17738__$1);
var G__17741 = c__4189__auto___17739;
var G__17742 = cljs.core.count.call(null,c__4189__auto___17739);
var G__17743 = 0;
seq__17724_17728 = G__17740;
chunk__17725_17729 = G__17741;
count__17726_17730 = G__17742;
i__17727_17731 = G__17743;
continue;
}
} else
{var node_17744 = cljs.core.first.call(null,seq__17724_17738__$1);goog.dom.classes.add(node_17744,class$);
{
var G__17745 = cljs.core.next.call(null,seq__17724_17738__$1);
var G__17746 = null;
var G__17747 = 0;
var G__17748 = 0;
seq__17724_17728 = G__17745;
chunk__17725_17729 = G__17746;
count__17726_17730 = G__17747;
i__17727_17731 = G__17748;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17753_17757 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17754_17758 = null;var count__17755_17759 = 0;var i__17756_17760 = 0;while(true){
if((i__17756_17760 < count__17755_17759))
{var node_17761 = cljs.core._nth.call(null,chunk__17754_17758,i__17756_17760);goog.dom.classes.remove(node_17761,class$);
{
var G__17762 = seq__17753_17757;
var G__17763 = chunk__17754_17758;
var G__17764 = count__17755_17759;
var G__17765 = (i__17756_17760 + 1);
seq__17753_17757 = G__17762;
chunk__17754_17758 = G__17763;
count__17755_17759 = G__17764;
i__17756_17760 = G__17765;
continue;
}
} else
{var temp__4092__auto___17766 = cljs.core.seq.call(null,seq__17753_17757);if(temp__4092__auto___17766)
{var seq__17753_17767__$1 = temp__4092__auto___17766;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17753_17767__$1))
{var c__4189__auto___17768 = cljs.core.chunk_first.call(null,seq__17753_17767__$1);{
var G__17769 = cljs.core.chunk_rest.call(null,seq__17753_17767__$1);
var G__17770 = c__4189__auto___17768;
var G__17771 = cljs.core.count.call(null,c__4189__auto___17768);
var G__17772 = 0;
seq__17753_17757 = G__17769;
chunk__17754_17758 = G__17770;
count__17755_17759 = G__17771;
i__17756_17760 = G__17772;
continue;
}
} else
{var node_17773 = cljs.core.first.call(null,seq__17753_17767__$1);goog.dom.classes.remove(node_17773,class$);
{
var G__17774 = cljs.core.next.call(null,seq__17753_17767__$1);
var G__17775 = null;
var G__17776 = 0;
var G__17777 = 0;
seq__17753_17757 = G__17774;
chunk__17754_17758 = G__17775;
count__17755_17759 = G__17776;
i__17756_17760 = G__17777;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17782_17786 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17783_17787 = null;var count__17784_17788 = 0;var i__17785_17789 = 0;while(true){
if((i__17785_17789 < count__17784_17788))
{var node_17790 = cljs.core._nth.call(null,chunk__17783_17787,i__17785_17789);goog.dom.classes.toggle(node_17790,class$);
{
var G__17791 = seq__17782_17786;
var G__17792 = chunk__17783_17787;
var G__17793 = count__17784_17788;
var G__17794 = (i__17785_17789 + 1);
seq__17782_17786 = G__17791;
chunk__17783_17787 = G__17792;
count__17784_17788 = G__17793;
i__17785_17789 = G__17794;
continue;
}
} else
{var temp__4092__auto___17795 = cljs.core.seq.call(null,seq__17782_17786);if(temp__4092__auto___17795)
{var seq__17782_17796__$1 = temp__4092__auto___17795;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17782_17796__$1))
{var c__4189__auto___17797 = cljs.core.chunk_first.call(null,seq__17782_17796__$1);{
var G__17798 = cljs.core.chunk_rest.call(null,seq__17782_17796__$1);
var G__17799 = c__4189__auto___17797;
var G__17800 = cljs.core.count.call(null,c__4189__auto___17797);
var G__17801 = 0;
seq__17782_17786 = G__17798;
chunk__17783_17787 = G__17799;
count__17784_17788 = G__17800;
i__17785_17789 = G__17801;
continue;
}
} else
{var node_17802 = cljs.core.first.call(null,seq__17782_17796__$1);goog.dom.classes.toggle(node_17802,class$);
{
var G__17803 = cljs.core.next.call(null,seq__17782_17796__$1);
var G__17804 = null;
var G__17805 = 0;
var G__17806 = 0;
seq__17782_17786 = G__17803;
chunk__17783_17787 = G__17804;
count__17784_17788 = G__17805;
i__17785_17789 = G__17806;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17815__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17811_17816 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17812_17817 = null;var count__17813_17818 = 0;var i__17814_17819 = 0;while(true){
if((i__17814_17819 < count__17813_17818))
{var node_17820 = cljs.core._nth.call(null,chunk__17812_17817,i__17814_17819);goog.dom.classes.set(node_17820,classes_17815__$1);
{
var G__17821 = seq__17811_17816;
var G__17822 = chunk__17812_17817;
var G__17823 = count__17813_17818;
var G__17824 = (i__17814_17819 + 1);
seq__17811_17816 = G__17821;
chunk__17812_17817 = G__17822;
count__17813_17818 = G__17823;
i__17814_17819 = G__17824;
continue;
}
} else
{var temp__4092__auto___17825 = cljs.core.seq.call(null,seq__17811_17816);if(temp__4092__auto___17825)
{var seq__17811_17826__$1 = temp__4092__auto___17825;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17811_17826__$1))
{var c__4189__auto___17827 = cljs.core.chunk_first.call(null,seq__17811_17826__$1);{
var G__17828 = cljs.core.chunk_rest.call(null,seq__17811_17826__$1);
var G__17829 = c__4189__auto___17827;
var G__17830 = cljs.core.count.call(null,c__4189__auto___17827);
var G__17831 = 0;
seq__17811_17816 = G__17828;
chunk__17812_17817 = G__17829;
count__17813_17818 = G__17830;
i__17814_17819 = G__17831;
continue;
}
} else
{var node_17832 = cljs.core.first.call(null,seq__17811_17826__$1);goog.dom.classes.set(node_17832,classes_17815__$1);
{
var G__17833 = cljs.core.next.call(null,seq__17811_17826__$1);
var G__17834 = null;
var G__17835 = 0;
var G__17836 = 0;
seq__17811_17816 = G__17833;
chunk__17812_17817 = G__17834;
count__17813_17818 = G__17835;
i__17814_17819 = G__17836;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17841_17845 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17842_17846 = null;var count__17843_17847 = 0;var i__17844_17848 = 0;while(true){
if((i__17844_17848 < count__17843_17847))
{var node_17849 = cljs.core._nth.call(null,chunk__17842_17846,i__17844_17848);goog.dom.setTextContent(node_17849,value);
{
var G__17850 = seq__17841_17845;
var G__17851 = chunk__17842_17846;
var G__17852 = count__17843_17847;
var G__17853 = (i__17844_17848 + 1);
seq__17841_17845 = G__17850;
chunk__17842_17846 = G__17851;
count__17843_17847 = G__17852;
i__17844_17848 = G__17853;
continue;
}
} else
{var temp__4092__auto___17854 = cljs.core.seq.call(null,seq__17841_17845);if(temp__4092__auto___17854)
{var seq__17841_17855__$1 = temp__4092__auto___17854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17841_17855__$1))
{var c__4189__auto___17856 = cljs.core.chunk_first.call(null,seq__17841_17855__$1);{
var G__17857 = cljs.core.chunk_rest.call(null,seq__17841_17855__$1);
var G__17858 = c__4189__auto___17856;
var G__17859 = cljs.core.count.call(null,c__4189__auto___17856);
var G__17860 = 0;
seq__17841_17845 = G__17857;
chunk__17842_17846 = G__17858;
count__17843_17847 = G__17859;
i__17844_17848 = G__17860;
continue;
}
} else
{var node_17861 = cljs.core.first.call(null,seq__17841_17855__$1);goog.dom.setTextContent(node_17861,value);
{
var G__17862 = cljs.core.next.call(null,seq__17841_17855__$1);
var G__17863 = null;
var G__17864 = 0;
var G__17865 = 0;
seq__17841_17845 = G__17862;
chunk__17842_17846 = G__17863;
count__17843_17847 = G__17864;
i__17844_17848 = G__17865;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17870_17874 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17871_17875 = null;var count__17872_17876 = 0;var i__17873_17877 = 0;while(true){
if((i__17873_17877 < count__17872_17876))
{var node_17878 = cljs.core._nth.call(null,chunk__17871_17875,i__17873_17877);goog.dom.forms.setValue(node_17878,value);
{
var G__17879 = seq__17870_17874;
var G__17880 = chunk__17871_17875;
var G__17881 = count__17872_17876;
var G__17882 = (i__17873_17877 + 1);
seq__17870_17874 = G__17879;
chunk__17871_17875 = G__17880;
count__17872_17876 = G__17881;
i__17873_17877 = G__17882;
continue;
}
} else
{var temp__4092__auto___17883 = cljs.core.seq.call(null,seq__17870_17874);if(temp__4092__auto___17883)
{var seq__17870_17884__$1 = temp__4092__auto___17883;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17870_17884__$1))
{var c__4189__auto___17885 = cljs.core.chunk_first.call(null,seq__17870_17884__$1);{
var G__17886 = cljs.core.chunk_rest.call(null,seq__17870_17884__$1);
var G__17887 = c__4189__auto___17885;
var G__17888 = cljs.core.count.call(null,c__4189__auto___17885);
var G__17889 = 0;
seq__17870_17874 = G__17886;
chunk__17871_17875 = G__17887;
count__17872_17876 = G__17888;
i__17873_17877 = G__17889;
continue;
}
} else
{var node_17890 = cljs.core.first.call(null,seq__17870_17884__$1);goog.dom.forms.setValue(node_17890,value);
{
var G__17891 = cljs.core.next.call(null,seq__17870_17884__$1);
var G__17892 = null;
var G__17893 = 0;
var G__17894 = 0;
seq__17870_17874 = G__17891;
chunk__17871_17875 = G__17892;
count__17872_17876 = G__17893;
i__17873_17877 = G__17894;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_17905 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17901_17906 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17902_17907 = null;var count__17903_17908 = 0;var i__17904_17909 = 0;while(true){
if((i__17904_17909 < count__17903_17908))
{var node_17910 = cljs.core._nth.call(null,chunk__17902_17907,i__17904_17909);node_17910.innerHTML = value_17905;
{
var G__17911 = seq__17901_17906;
var G__17912 = chunk__17902_17907;
var G__17913 = count__17903_17908;
var G__17914 = (i__17904_17909 + 1);
seq__17901_17906 = G__17911;
chunk__17902_17907 = G__17912;
count__17903_17908 = G__17913;
i__17904_17909 = G__17914;
continue;
}
} else
{var temp__4092__auto___17915 = cljs.core.seq.call(null,seq__17901_17906);if(temp__4092__auto___17915)
{var seq__17901_17916__$1 = temp__4092__auto___17915;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17901_17916__$1))
{var c__4189__auto___17917 = cljs.core.chunk_first.call(null,seq__17901_17916__$1);{
var G__17918 = cljs.core.chunk_rest.call(null,seq__17901_17916__$1);
var G__17919 = c__4189__auto___17917;
var G__17920 = cljs.core.count.call(null,c__4189__auto___17917);
var G__17921 = 0;
seq__17901_17906 = G__17918;
chunk__17902_17907 = G__17919;
count__17903_17908 = G__17920;
i__17904_17909 = G__17921;
continue;
}
} else
{var node_17922 = cljs.core.first.call(null,seq__17901_17916__$1);node_17922.innerHTML = value_17905;
{
var G__17923 = cljs.core.next.call(null,seq__17901_17916__$1);
var G__17924 = null;
var G__17925 = 0;
var G__17926 = 0;
seq__17901_17906 = G__17923;
chunk__17902_17907 = G__17924;
count__17903_17908 = G__17925;
i__17904_17909 = G__17926;
continue;
}
}
} else
{}
}
break;
}
}catch (e17900){if((e17900 instanceof Error))
{var e_17927 = e17900;domina.replace_children_BANG_.call(null,content,value_17905);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17900;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17934_17938 = cljs.core.seq.call(null,children);var chunk__17935_17939 = null;var count__17936_17940 = 0;var i__17937_17941 = 0;while(true){
if((i__17937_17941 < count__17936_17940))
{var child_17942 = cljs.core._nth.call(null,chunk__17935_17939,i__17937_17941);frag.appendChild(child_17942);
{
var G__17943 = seq__17934_17938;
var G__17944 = chunk__17935_17939;
var G__17945 = count__17936_17940;
var G__17946 = (i__17937_17941 + 1);
seq__17934_17938 = G__17943;
chunk__17935_17939 = G__17944;
count__17936_17940 = G__17945;
i__17937_17941 = G__17946;
continue;
}
} else
{var temp__4092__auto___17947 = cljs.core.seq.call(null,seq__17934_17938);if(temp__4092__auto___17947)
{var seq__17934_17948__$1 = temp__4092__auto___17947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17934_17948__$1))
{var c__4189__auto___17949 = cljs.core.chunk_first.call(null,seq__17934_17948__$1);{
var G__17950 = cljs.core.chunk_rest.call(null,seq__17934_17948__$1);
var G__17951 = c__4189__auto___17949;
var G__17952 = cljs.core.count.call(null,c__4189__auto___17949);
var G__17953 = 0;
seq__17934_17938 = G__17950;
chunk__17935_17939 = G__17951;
count__17936_17940 = G__17952;
i__17937_17941 = G__17953;
continue;
}
} else
{var child_17954 = cljs.core.first.call(null,seq__17934_17948__$1);frag.appendChild(child_17954);
{
var G__17955 = cljs.core.next.call(null,seq__17934_17948__$1);
var G__17956 = null;
var G__17957 = 0;
var G__17958 = 0;
seq__17934_17938 = G__17955;
chunk__17935_17939 = G__17956;
count__17936_17940 = G__17957;
i__17937_17941 = G__17958;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17928_SHARP_,p2__17929_SHARP_){return f.call(null,p1__17928_SHARP_,p2__17929_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
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
{if((function (){var G__17960 = list_thing;if(G__17960)
{var bit__4091__auto__ = (G__17960.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17960.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17960.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17960);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17960);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__17961 = content;if(G__17961)
{var bit__4091__auto__ = (G__17961.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17961.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17961.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17961);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17961);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__17962 = content;if(G__17962)
{var bit__4091__auto__ = (G__17962.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17962.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17962.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17962);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17962);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
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
