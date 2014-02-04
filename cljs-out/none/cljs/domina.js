// Compiled by ClojureScript 0.0-2138
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
var opt_wrapper_16625 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_16626 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_16627 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_16626,table_section_wrapper_16626,opt_wrapper_16625,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_16627,table_section_wrapper_16626,cell_wrapper_16627,opt_wrapper_16625,table_section_wrapper_16626,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_16626]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__16632 = cljs.core.seq.call(null,tbody);var chunk__16633 = null;var count__16634 = 0;var i__16635 = 0;while(true){
if((i__16635 < count__16634))
{var child = cljs.core._nth.call(null,chunk__16633,i__16635);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16636 = seq__16632;
var G__16637 = chunk__16633;
var G__16638 = count__16634;
var G__16639 = (i__16635 + 1);
seq__16632 = G__16636;
chunk__16633 = G__16637;
count__16634 = G__16638;
i__16635 = G__16639;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__16632);if(temp__4092__auto__)
{var seq__16632__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16632__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__16632__$1);{
var G__16640 = cljs.core.chunk_rest.call(null,seq__16632__$1);
var G__16641 = c__4148__auto__;
var G__16642 = cljs.core.count.call(null,c__4148__auto__);
var G__16643 = 0;
seq__16632 = G__16640;
chunk__16633 = G__16641;
count__16634 = G__16642;
i__16635 = G__16643;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__16632__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__16644 = cljs.core.next.call(null,seq__16632__$1);
var G__16645 = null;
var G__16646 = 0;
var G__16647 = 0;
seq__16632 = G__16644;
chunk__16633 = G__16645;
count__16634 = G__16646;
i__16635 = G__16647;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__16649 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__16649,0,null);var start_wrap = cljs.core.nth.call(null,vec__16649,1,null);var end_wrap = cljs.core.nth.call(null,vec__16649,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__16650 = wrapper.lastChild;
var G__16651 = (level - 1);
wrapper = G__16650;
level = G__16651;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj16653 = {};return obj16653;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__16654){
var mesg = cljs.core.seq(arglist__16654);
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
log.cljs$lang$applyTo = (function (arglist__16655){
var mesg = cljs.core.seq(arglist__16655);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__16656){
var contents = cljs.core.seq(arglist__16656);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__16657_SHARP_){return p1__16657_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__16658_SHARP_,p2__16659_SHARP_){return goog.dom.insertChildAt(p1__16658_SHARP_,p2__16659_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16661_SHARP_,p2__16660_SHARP_){return goog.dom.insertSiblingBefore(p2__16660_SHARP_,p1__16661_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__16663_SHARP_,p2__16662_SHARP_){return goog.dom.insertSiblingAfter(p2__16662_SHARP_,p1__16663_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__16665_SHARP_,p2__16664_SHARP_){return goog.dom.replaceNode(p2__16664_SHARP_,p1__16665_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__16670_16674 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16671_16675 = null;var count__16672_16676 = 0;var i__16673_16677 = 0;while(true){
if((i__16673_16677 < count__16672_16676))
{var n_16678 = cljs.core._nth.call(null,chunk__16671_16675,i__16673_16677);goog.style.setStyle(n_16678,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16679 = seq__16670_16674;
var G__16680 = chunk__16671_16675;
var G__16681 = count__16672_16676;
var G__16682 = (i__16673_16677 + 1);
seq__16670_16674 = G__16679;
chunk__16671_16675 = G__16680;
count__16672_16676 = G__16681;
i__16673_16677 = G__16682;
continue;
}
} else
{var temp__4092__auto___16683 = cljs.core.seq.call(null,seq__16670_16674);if(temp__4092__auto___16683)
{var seq__16670_16684__$1 = temp__4092__auto___16683;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16670_16684__$1))
{var c__4148__auto___16685 = cljs.core.chunk_first.call(null,seq__16670_16684__$1);{
var G__16686 = cljs.core.chunk_rest.call(null,seq__16670_16684__$1);
var G__16687 = c__4148__auto___16685;
var G__16688 = cljs.core.count.call(null,c__4148__auto___16685);
var G__16689 = 0;
seq__16670_16674 = G__16686;
chunk__16671_16675 = G__16687;
count__16672_16676 = G__16688;
i__16673_16677 = G__16689;
continue;
}
} else
{var n_16690 = cljs.core.first.call(null,seq__16670_16684__$1);goog.style.setStyle(n_16690,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16691 = cljs.core.next.call(null,seq__16670_16684__$1);
var G__16692 = null;
var G__16693 = 0;
var G__16694 = 0;
seq__16670_16674 = G__16691;
chunk__16671_16675 = G__16692;
count__16672_16676 = G__16693;
i__16673_16677 = G__16694;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16695){
var content = cljs.core.first(arglist__16695);
arglist__16695 = cljs.core.next(arglist__16695);
var name = cljs.core.first(arglist__16695);
var value = cljs.core.rest(arglist__16695);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__16700_16704 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16701_16705 = null;var count__16702_16706 = 0;var i__16703_16707 = 0;while(true){
if((i__16703_16707 < count__16702_16706))
{var n_16708 = cljs.core._nth.call(null,chunk__16701_16705,i__16703_16707);n_16708.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16709 = seq__16700_16704;
var G__16710 = chunk__16701_16705;
var G__16711 = count__16702_16706;
var G__16712 = (i__16703_16707 + 1);
seq__16700_16704 = G__16709;
chunk__16701_16705 = G__16710;
count__16702_16706 = G__16711;
i__16703_16707 = G__16712;
continue;
}
} else
{var temp__4092__auto___16713 = cljs.core.seq.call(null,seq__16700_16704);if(temp__4092__auto___16713)
{var seq__16700_16714__$1 = temp__4092__auto___16713;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16700_16714__$1))
{var c__4148__auto___16715 = cljs.core.chunk_first.call(null,seq__16700_16714__$1);{
var G__16716 = cljs.core.chunk_rest.call(null,seq__16700_16714__$1);
var G__16717 = c__4148__auto___16715;
var G__16718 = cljs.core.count.call(null,c__4148__auto___16715);
var G__16719 = 0;
seq__16700_16704 = G__16716;
chunk__16701_16705 = G__16717;
count__16702_16706 = G__16718;
i__16703_16707 = G__16719;
continue;
}
} else
{var n_16720 = cljs.core.first.call(null,seq__16700_16714__$1);n_16720.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__16721 = cljs.core.next.call(null,seq__16700_16714__$1);
var G__16722 = null;
var G__16723 = 0;
var G__16724 = 0;
seq__16700_16704 = G__16721;
chunk__16701_16705 = G__16722;
count__16702_16706 = G__16723;
i__16703_16707 = G__16724;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16725){
var content = cljs.core.first(arglist__16725);
arglist__16725 = cljs.core.next(arglist__16725);
var name = cljs.core.first(arglist__16725);
var value = cljs.core.rest(arglist__16725);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__16730_16734 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16731_16735 = null;var count__16732_16736 = 0;var i__16733_16737 = 0;while(true){
if((i__16733_16737 < count__16732_16736))
{var n_16738 = cljs.core._nth.call(null,chunk__16731_16735,i__16733_16737);n_16738.removeAttribute(cljs.core.name.call(null,name));
{
var G__16739 = seq__16730_16734;
var G__16740 = chunk__16731_16735;
var G__16741 = count__16732_16736;
var G__16742 = (i__16733_16737 + 1);
seq__16730_16734 = G__16739;
chunk__16731_16735 = G__16740;
count__16732_16736 = G__16741;
i__16733_16737 = G__16742;
continue;
}
} else
{var temp__4092__auto___16743 = cljs.core.seq.call(null,seq__16730_16734);if(temp__4092__auto___16743)
{var seq__16730_16744__$1 = temp__4092__auto___16743;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16730_16744__$1))
{var c__4148__auto___16745 = cljs.core.chunk_first.call(null,seq__16730_16744__$1);{
var G__16746 = cljs.core.chunk_rest.call(null,seq__16730_16744__$1);
var G__16747 = c__4148__auto___16745;
var G__16748 = cljs.core.count.call(null,c__4148__auto___16745);
var G__16749 = 0;
seq__16730_16734 = G__16746;
chunk__16731_16735 = G__16747;
count__16732_16736 = G__16748;
i__16733_16737 = G__16749;
continue;
}
} else
{var n_16750 = cljs.core.first.call(null,seq__16730_16744__$1);n_16750.removeAttribute(cljs.core.name.call(null,name));
{
var G__16751 = cljs.core.next.call(null,seq__16730_16744__$1);
var G__16752 = null;
var G__16753 = 0;
var G__16754 = 0;
seq__16730_16734 = G__16751;
chunk__16731_16735 = G__16752;
count__16732_16736 = G__16753;
i__16733_16737 = G__16754;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__16756 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__16756,0,null);var v = cljs.core.nth.call(null,vec__16756,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16757_SHARP_){var attr = attrs__$1.item(p1__16757_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16764_16770 = cljs.core.seq.call(null,styles);var chunk__16765_16771 = null;var count__16766_16772 = 0;var i__16767_16773 = 0;while(true){
if((i__16767_16773 < count__16766_16772))
{var vec__16768_16774 = cljs.core._nth.call(null,chunk__16765_16771,i__16767_16773);var name_16775 = cljs.core.nth.call(null,vec__16768_16774,0,null);var value_16776 = cljs.core.nth.call(null,vec__16768_16774,1,null);domina.set_style_BANG_.call(null,content,name_16775,value_16776);
{
var G__16777 = seq__16764_16770;
var G__16778 = chunk__16765_16771;
var G__16779 = count__16766_16772;
var G__16780 = (i__16767_16773 + 1);
seq__16764_16770 = G__16777;
chunk__16765_16771 = G__16778;
count__16766_16772 = G__16779;
i__16767_16773 = G__16780;
continue;
}
} else
{var temp__4092__auto___16781 = cljs.core.seq.call(null,seq__16764_16770);if(temp__4092__auto___16781)
{var seq__16764_16782__$1 = temp__4092__auto___16781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16764_16782__$1))
{var c__4148__auto___16783 = cljs.core.chunk_first.call(null,seq__16764_16782__$1);{
var G__16784 = cljs.core.chunk_rest.call(null,seq__16764_16782__$1);
var G__16785 = c__4148__auto___16783;
var G__16786 = cljs.core.count.call(null,c__4148__auto___16783);
var G__16787 = 0;
seq__16764_16770 = G__16784;
chunk__16765_16771 = G__16785;
count__16766_16772 = G__16786;
i__16767_16773 = G__16787;
continue;
}
} else
{var vec__16769_16788 = cljs.core.first.call(null,seq__16764_16782__$1);var name_16789 = cljs.core.nth.call(null,vec__16769_16788,0,null);var value_16790 = cljs.core.nth.call(null,vec__16769_16788,1,null);domina.set_style_BANG_.call(null,content,name_16789,value_16790);
{
var G__16791 = cljs.core.next.call(null,seq__16764_16782__$1);
var G__16792 = null;
var G__16793 = 0;
var G__16794 = 0;
seq__16764_16770 = G__16791;
chunk__16765_16771 = G__16792;
count__16766_16772 = G__16793;
i__16767_16773 = G__16794;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16801_16807 = cljs.core.seq.call(null,attrs);var chunk__16802_16808 = null;var count__16803_16809 = 0;var i__16804_16810 = 0;while(true){
if((i__16804_16810 < count__16803_16809))
{var vec__16805_16811 = cljs.core._nth.call(null,chunk__16802_16808,i__16804_16810);var name_16812 = cljs.core.nth.call(null,vec__16805_16811,0,null);var value_16813 = cljs.core.nth.call(null,vec__16805_16811,1,null);domina.set_attr_BANG_.call(null,content,name_16812,value_16813);
{
var G__16814 = seq__16801_16807;
var G__16815 = chunk__16802_16808;
var G__16816 = count__16803_16809;
var G__16817 = (i__16804_16810 + 1);
seq__16801_16807 = G__16814;
chunk__16802_16808 = G__16815;
count__16803_16809 = G__16816;
i__16804_16810 = G__16817;
continue;
}
} else
{var temp__4092__auto___16818 = cljs.core.seq.call(null,seq__16801_16807);if(temp__4092__auto___16818)
{var seq__16801_16819__$1 = temp__4092__auto___16818;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16801_16819__$1))
{var c__4148__auto___16820 = cljs.core.chunk_first.call(null,seq__16801_16819__$1);{
var G__16821 = cljs.core.chunk_rest.call(null,seq__16801_16819__$1);
var G__16822 = c__4148__auto___16820;
var G__16823 = cljs.core.count.call(null,c__4148__auto___16820);
var G__16824 = 0;
seq__16801_16807 = G__16821;
chunk__16802_16808 = G__16822;
count__16803_16809 = G__16823;
i__16804_16810 = G__16824;
continue;
}
} else
{var vec__16806_16825 = cljs.core.first.call(null,seq__16801_16819__$1);var name_16826 = cljs.core.nth.call(null,vec__16806_16825,0,null);var value_16827 = cljs.core.nth.call(null,vec__16806_16825,1,null);domina.set_attr_BANG_.call(null,content,name_16826,value_16827);
{
var G__16828 = cljs.core.next.call(null,seq__16801_16819__$1);
var G__16829 = null;
var G__16830 = 0;
var G__16831 = 0;
seq__16801_16807 = G__16828;
chunk__16802_16808 = G__16829;
count__16803_16809 = G__16830;
i__16804_16810 = G__16831;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16836_16840 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16837_16841 = null;var count__16838_16842 = 0;var i__16839_16843 = 0;while(true){
if((i__16839_16843 < count__16838_16842))
{var node_16844 = cljs.core._nth.call(null,chunk__16837_16841,i__16839_16843);goog.dom.classes.add(node_16844,class$);
{
var G__16845 = seq__16836_16840;
var G__16846 = chunk__16837_16841;
var G__16847 = count__16838_16842;
var G__16848 = (i__16839_16843 + 1);
seq__16836_16840 = G__16845;
chunk__16837_16841 = G__16846;
count__16838_16842 = G__16847;
i__16839_16843 = G__16848;
continue;
}
} else
{var temp__4092__auto___16849 = cljs.core.seq.call(null,seq__16836_16840);if(temp__4092__auto___16849)
{var seq__16836_16850__$1 = temp__4092__auto___16849;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16836_16850__$1))
{var c__4148__auto___16851 = cljs.core.chunk_first.call(null,seq__16836_16850__$1);{
var G__16852 = cljs.core.chunk_rest.call(null,seq__16836_16850__$1);
var G__16853 = c__4148__auto___16851;
var G__16854 = cljs.core.count.call(null,c__4148__auto___16851);
var G__16855 = 0;
seq__16836_16840 = G__16852;
chunk__16837_16841 = G__16853;
count__16838_16842 = G__16854;
i__16839_16843 = G__16855;
continue;
}
} else
{var node_16856 = cljs.core.first.call(null,seq__16836_16850__$1);goog.dom.classes.add(node_16856,class$);
{
var G__16857 = cljs.core.next.call(null,seq__16836_16850__$1);
var G__16858 = null;
var G__16859 = 0;
var G__16860 = 0;
seq__16836_16840 = G__16857;
chunk__16837_16841 = G__16858;
count__16838_16842 = G__16859;
i__16839_16843 = G__16860;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16865_16869 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16866_16870 = null;var count__16867_16871 = 0;var i__16868_16872 = 0;while(true){
if((i__16868_16872 < count__16867_16871))
{var node_16873 = cljs.core._nth.call(null,chunk__16866_16870,i__16868_16872);goog.dom.classes.remove(node_16873,class$);
{
var G__16874 = seq__16865_16869;
var G__16875 = chunk__16866_16870;
var G__16876 = count__16867_16871;
var G__16877 = (i__16868_16872 + 1);
seq__16865_16869 = G__16874;
chunk__16866_16870 = G__16875;
count__16867_16871 = G__16876;
i__16868_16872 = G__16877;
continue;
}
} else
{var temp__4092__auto___16878 = cljs.core.seq.call(null,seq__16865_16869);if(temp__4092__auto___16878)
{var seq__16865_16879__$1 = temp__4092__auto___16878;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16865_16879__$1))
{var c__4148__auto___16880 = cljs.core.chunk_first.call(null,seq__16865_16879__$1);{
var G__16881 = cljs.core.chunk_rest.call(null,seq__16865_16879__$1);
var G__16882 = c__4148__auto___16880;
var G__16883 = cljs.core.count.call(null,c__4148__auto___16880);
var G__16884 = 0;
seq__16865_16869 = G__16881;
chunk__16866_16870 = G__16882;
count__16867_16871 = G__16883;
i__16868_16872 = G__16884;
continue;
}
} else
{var node_16885 = cljs.core.first.call(null,seq__16865_16879__$1);goog.dom.classes.remove(node_16885,class$);
{
var G__16886 = cljs.core.next.call(null,seq__16865_16879__$1);
var G__16887 = null;
var G__16888 = 0;
var G__16889 = 0;
seq__16865_16869 = G__16886;
chunk__16866_16870 = G__16887;
count__16867_16871 = G__16888;
i__16868_16872 = G__16889;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16894_16898 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16895_16899 = null;var count__16896_16900 = 0;var i__16897_16901 = 0;while(true){
if((i__16897_16901 < count__16896_16900))
{var node_16902 = cljs.core._nth.call(null,chunk__16895_16899,i__16897_16901);goog.dom.classes.toggle(node_16902,class$);
{
var G__16903 = seq__16894_16898;
var G__16904 = chunk__16895_16899;
var G__16905 = count__16896_16900;
var G__16906 = (i__16897_16901 + 1);
seq__16894_16898 = G__16903;
chunk__16895_16899 = G__16904;
count__16896_16900 = G__16905;
i__16897_16901 = G__16906;
continue;
}
} else
{var temp__4092__auto___16907 = cljs.core.seq.call(null,seq__16894_16898);if(temp__4092__auto___16907)
{var seq__16894_16908__$1 = temp__4092__auto___16907;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16894_16908__$1))
{var c__4148__auto___16909 = cljs.core.chunk_first.call(null,seq__16894_16908__$1);{
var G__16910 = cljs.core.chunk_rest.call(null,seq__16894_16908__$1);
var G__16911 = c__4148__auto___16909;
var G__16912 = cljs.core.count.call(null,c__4148__auto___16909);
var G__16913 = 0;
seq__16894_16898 = G__16910;
chunk__16895_16899 = G__16911;
count__16896_16900 = G__16912;
i__16897_16901 = G__16913;
continue;
}
} else
{var node_16914 = cljs.core.first.call(null,seq__16894_16908__$1);goog.dom.classes.toggle(node_16914,class$);
{
var G__16915 = cljs.core.next.call(null,seq__16894_16908__$1);
var G__16916 = null;
var G__16917 = 0;
var G__16918 = 0;
seq__16894_16898 = G__16915;
chunk__16895_16899 = G__16916;
count__16896_16900 = G__16917;
i__16897_16901 = G__16918;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16927__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16923_16928 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16924_16929 = null;var count__16925_16930 = 0;var i__16926_16931 = 0;while(true){
if((i__16926_16931 < count__16925_16930))
{var node_16932 = cljs.core._nth.call(null,chunk__16924_16929,i__16926_16931);goog.dom.classes.set(node_16932,classes_16927__$1);
{
var G__16933 = seq__16923_16928;
var G__16934 = chunk__16924_16929;
var G__16935 = count__16925_16930;
var G__16936 = (i__16926_16931 + 1);
seq__16923_16928 = G__16933;
chunk__16924_16929 = G__16934;
count__16925_16930 = G__16935;
i__16926_16931 = G__16936;
continue;
}
} else
{var temp__4092__auto___16937 = cljs.core.seq.call(null,seq__16923_16928);if(temp__4092__auto___16937)
{var seq__16923_16938__$1 = temp__4092__auto___16937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16923_16938__$1))
{var c__4148__auto___16939 = cljs.core.chunk_first.call(null,seq__16923_16938__$1);{
var G__16940 = cljs.core.chunk_rest.call(null,seq__16923_16938__$1);
var G__16941 = c__4148__auto___16939;
var G__16942 = cljs.core.count.call(null,c__4148__auto___16939);
var G__16943 = 0;
seq__16923_16928 = G__16940;
chunk__16924_16929 = G__16941;
count__16925_16930 = G__16942;
i__16926_16931 = G__16943;
continue;
}
} else
{var node_16944 = cljs.core.first.call(null,seq__16923_16938__$1);goog.dom.classes.set(node_16944,classes_16927__$1);
{
var G__16945 = cljs.core.next.call(null,seq__16923_16938__$1);
var G__16946 = null;
var G__16947 = 0;
var G__16948 = 0;
seq__16923_16928 = G__16945;
chunk__16924_16929 = G__16946;
count__16925_16930 = G__16947;
i__16926_16931 = G__16948;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16953_16957 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16954_16958 = null;var count__16955_16959 = 0;var i__16956_16960 = 0;while(true){
if((i__16956_16960 < count__16955_16959))
{var node_16961 = cljs.core._nth.call(null,chunk__16954_16958,i__16956_16960);goog.dom.setTextContent(node_16961,value);
{
var G__16962 = seq__16953_16957;
var G__16963 = chunk__16954_16958;
var G__16964 = count__16955_16959;
var G__16965 = (i__16956_16960 + 1);
seq__16953_16957 = G__16962;
chunk__16954_16958 = G__16963;
count__16955_16959 = G__16964;
i__16956_16960 = G__16965;
continue;
}
} else
{var temp__4092__auto___16966 = cljs.core.seq.call(null,seq__16953_16957);if(temp__4092__auto___16966)
{var seq__16953_16967__$1 = temp__4092__auto___16966;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16953_16967__$1))
{var c__4148__auto___16968 = cljs.core.chunk_first.call(null,seq__16953_16967__$1);{
var G__16969 = cljs.core.chunk_rest.call(null,seq__16953_16967__$1);
var G__16970 = c__4148__auto___16968;
var G__16971 = cljs.core.count.call(null,c__4148__auto___16968);
var G__16972 = 0;
seq__16953_16957 = G__16969;
chunk__16954_16958 = G__16970;
count__16955_16959 = G__16971;
i__16956_16960 = G__16972;
continue;
}
} else
{var node_16973 = cljs.core.first.call(null,seq__16953_16967__$1);goog.dom.setTextContent(node_16973,value);
{
var G__16974 = cljs.core.next.call(null,seq__16953_16967__$1);
var G__16975 = null;
var G__16976 = 0;
var G__16977 = 0;
seq__16953_16957 = G__16974;
chunk__16954_16958 = G__16975;
count__16955_16959 = G__16976;
i__16956_16960 = G__16977;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16982_16986 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16983_16987 = null;var count__16984_16988 = 0;var i__16985_16989 = 0;while(true){
if((i__16985_16989 < count__16984_16988))
{var node_16990 = cljs.core._nth.call(null,chunk__16983_16987,i__16985_16989);goog.dom.forms.setValue(node_16990,value);
{
var G__16991 = seq__16982_16986;
var G__16992 = chunk__16983_16987;
var G__16993 = count__16984_16988;
var G__16994 = (i__16985_16989 + 1);
seq__16982_16986 = G__16991;
chunk__16983_16987 = G__16992;
count__16984_16988 = G__16993;
i__16985_16989 = G__16994;
continue;
}
} else
{var temp__4092__auto___16995 = cljs.core.seq.call(null,seq__16982_16986);if(temp__4092__auto___16995)
{var seq__16982_16996__$1 = temp__4092__auto___16995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16982_16996__$1))
{var c__4148__auto___16997 = cljs.core.chunk_first.call(null,seq__16982_16996__$1);{
var G__16998 = cljs.core.chunk_rest.call(null,seq__16982_16996__$1);
var G__16999 = c__4148__auto___16997;
var G__17000 = cljs.core.count.call(null,c__4148__auto___16997);
var G__17001 = 0;
seq__16982_16986 = G__16998;
chunk__16983_16987 = G__16999;
count__16984_16988 = G__17000;
i__16985_16989 = G__17001;
continue;
}
} else
{var node_17002 = cljs.core.first.call(null,seq__16982_16996__$1);goog.dom.forms.setValue(node_17002,value);
{
var G__17003 = cljs.core.next.call(null,seq__16982_16996__$1);
var G__17004 = null;
var G__17005 = 0;
var G__17006 = 0;
seq__16982_16986 = G__17003;
chunk__16983_16987 = G__17004;
count__16984_16988 = G__17005;
i__16985_16989 = G__17006;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_17017 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17013_17018 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17014_17019 = null;var count__17015_17020 = 0;var i__17016_17021 = 0;while(true){
if((i__17016_17021 < count__17015_17020))
{var node_17022 = cljs.core._nth.call(null,chunk__17014_17019,i__17016_17021);node_17022.innerHTML = value_17017;
{
var G__17023 = seq__17013_17018;
var G__17024 = chunk__17014_17019;
var G__17025 = count__17015_17020;
var G__17026 = (i__17016_17021 + 1);
seq__17013_17018 = G__17023;
chunk__17014_17019 = G__17024;
count__17015_17020 = G__17025;
i__17016_17021 = G__17026;
continue;
}
} else
{var temp__4092__auto___17027 = cljs.core.seq.call(null,seq__17013_17018);if(temp__4092__auto___17027)
{var seq__17013_17028__$1 = temp__4092__auto___17027;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17013_17028__$1))
{var c__4148__auto___17029 = cljs.core.chunk_first.call(null,seq__17013_17028__$1);{
var G__17030 = cljs.core.chunk_rest.call(null,seq__17013_17028__$1);
var G__17031 = c__4148__auto___17029;
var G__17032 = cljs.core.count.call(null,c__4148__auto___17029);
var G__17033 = 0;
seq__17013_17018 = G__17030;
chunk__17014_17019 = G__17031;
count__17015_17020 = G__17032;
i__17016_17021 = G__17033;
continue;
}
} else
{var node_17034 = cljs.core.first.call(null,seq__17013_17028__$1);node_17034.innerHTML = value_17017;
{
var G__17035 = cljs.core.next.call(null,seq__17013_17028__$1);
var G__17036 = null;
var G__17037 = 0;
var G__17038 = 0;
seq__17013_17018 = G__17035;
chunk__17014_17019 = G__17036;
count__17015_17020 = G__17037;
i__17016_17021 = G__17038;
continue;
}
}
} else
{}
}
break;
}
}catch (e17012){if((e17012 instanceof Error))
{var e_17039 = e17012;domina.replace_children_BANG_.call(null,content,value_17017);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17012;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17046_17050 = cljs.core.seq.call(null,children);var chunk__17047_17051 = null;var count__17048_17052 = 0;var i__17049_17053 = 0;while(true){
if((i__17049_17053 < count__17048_17052))
{var child_17054 = cljs.core._nth.call(null,chunk__17047_17051,i__17049_17053);frag.appendChild(child_17054);
{
var G__17055 = seq__17046_17050;
var G__17056 = chunk__17047_17051;
var G__17057 = count__17048_17052;
var G__17058 = (i__17049_17053 + 1);
seq__17046_17050 = G__17055;
chunk__17047_17051 = G__17056;
count__17048_17052 = G__17057;
i__17049_17053 = G__17058;
continue;
}
} else
{var temp__4092__auto___17059 = cljs.core.seq.call(null,seq__17046_17050);if(temp__4092__auto___17059)
{var seq__17046_17060__$1 = temp__4092__auto___17059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17046_17060__$1))
{var c__4148__auto___17061 = cljs.core.chunk_first.call(null,seq__17046_17060__$1);{
var G__17062 = cljs.core.chunk_rest.call(null,seq__17046_17060__$1);
var G__17063 = c__4148__auto___17061;
var G__17064 = cljs.core.count.call(null,c__4148__auto___17061);
var G__17065 = 0;
seq__17046_17050 = G__17062;
chunk__17047_17051 = G__17063;
count__17048_17052 = G__17064;
i__17049_17053 = G__17065;
continue;
}
} else
{var child_17066 = cljs.core.first.call(null,seq__17046_17060__$1);frag.appendChild(child_17066);
{
var G__17067 = cljs.core.next.call(null,seq__17046_17060__$1);
var G__17068 = null;
var G__17069 = 0;
var G__17070 = 0;
seq__17046_17050 = G__17067;
chunk__17047_17051 = G__17068;
count__17048_17052 = G__17069;
i__17049_17053 = G__17070;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17040_SHARP_,p2__17041_SHARP_){return f.call(null,p1__17040_SHARP_,p2__17041_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__17072 = list_thing;if(G__17072)
{var bit__4050__auto__ = (G__17072.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17072.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17072.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17072);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17072);
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
{if((function (){var G__17073 = content;if(G__17073)
{var bit__4050__auto__ = (G__17073.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17073.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17073.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17073);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17073);
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
{if((function (){var G__17074 = content;if(G__17074)
{var bit__4050__auto__ = (G__17074.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__17074.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17074.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17074);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17074);
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

//# sourceMappingURL=domina.js.map