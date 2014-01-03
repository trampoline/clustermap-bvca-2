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
var opt_wrapper_28622 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28623 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28624 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28623,table_section_wrapper_28623,opt_wrapper_28622,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28624,table_section_wrapper_28623,cell_wrapper_28624,opt_wrapper_28622,table_section_wrapper_28623,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28623]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28629 = cljs.core.seq.call(null,tbody);var chunk__28630 = null;var count__28631 = 0;var i__28632 = 0;while(true){
if((i__28632 < count__28631))
{var child = cljs.core._nth.call(null,chunk__28630,i__28632);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28633 = seq__28629;
var G__28634 = chunk__28630;
var G__28635 = count__28631;
var G__28636 = (i__28632 + 1);
seq__28629 = G__28633;
chunk__28630 = G__28634;
count__28631 = G__28635;
i__28632 = G__28636;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28629);if(temp__4092__auto__)
{var seq__28629__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28629__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__28629__$1);{
var G__28637 = cljs.core.chunk_rest.call(null,seq__28629__$1);
var G__28638 = c__4148__auto__;
var G__28639 = cljs.core.count.call(null,c__4148__auto__);
var G__28640 = 0;
seq__28629 = G__28637;
chunk__28630 = G__28638;
count__28631 = G__28639;
i__28632 = G__28640;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28629__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28641 = cljs.core.next.call(null,seq__28629__$1);
var G__28642 = null;
var G__28643 = 0;
var G__28644 = 0;
seq__28629 = G__28641;
chunk__28630 = G__28642;
count__28631 = G__28643;
i__28632 = G__28644;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28646 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28646,0,null);var start_wrap = cljs.core.nth.call(null,vec__28646,1,null);var end_wrap = cljs.core.nth.call(null,vec__28646,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28647 = wrapper.lastChild;
var G__28648 = (level - 1);
wrapper = G__28647;
level = G__28648;
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
domina.DomContent = (function (){var obj28650 = {};return obj28650;
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
log_debug.cljs$lang$applyTo = (function (arglist__28651){
var mesg = cljs.core.seq(arglist__28651);
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
log.cljs$lang$applyTo = (function (arglist__28652){
var mesg = cljs.core.seq(arglist__28652);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28653){
var contents = cljs.core.seq(arglist__28653);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28654_SHARP_){return p1__28654_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28655_SHARP_,p2__28656_SHARP_){return goog.dom.insertChildAt(p1__28655_SHARP_,p2__28656_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28658_SHARP_,p2__28657_SHARP_){return goog.dom.insertSiblingBefore(p2__28657_SHARP_,p1__28658_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28660_SHARP_,p2__28659_SHARP_){return goog.dom.insertSiblingAfter(p2__28659_SHARP_,p1__28660_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28662_SHARP_,p2__28661_SHARP_){return goog.dom.replaceNode(p2__28661_SHARP_,p1__28662_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28667_28671 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28668_28672 = null;var count__28669_28673 = 0;var i__28670_28674 = 0;while(true){
if((i__28670_28674 < count__28669_28673))
{var n_28675 = cljs.core._nth.call(null,chunk__28668_28672,i__28670_28674);goog.style.setStyle(n_28675,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28676 = seq__28667_28671;
var G__28677 = chunk__28668_28672;
var G__28678 = count__28669_28673;
var G__28679 = (i__28670_28674 + 1);
seq__28667_28671 = G__28676;
chunk__28668_28672 = G__28677;
count__28669_28673 = G__28678;
i__28670_28674 = G__28679;
continue;
}
} else
{var temp__4092__auto___28680 = cljs.core.seq.call(null,seq__28667_28671);if(temp__4092__auto___28680)
{var seq__28667_28681__$1 = temp__4092__auto___28680;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28667_28681__$1))
{var c__4148__auto___28682 = cljs.core.chunk_first.call(null,seq__28667_28681__$1);{
var G__28683 = cljs.core.chunk_rest.call(null,seq__28667_28681__$1);
var G__28684 = c__4148__auto___28682;
var G__28685 = cljs.core.count.call(null,c__4148__auto___28682);
var G__28686 = 0;
seq__28667_28671 = G__28683;
chunk__28668_28672 = G__28684;
count__28669_28673 = G__28685;
i__28670_28674 = G__28686;
continue;
}
} else
{var n_28687 = cljs.core.first.call(null,seq__28667_28681__$1);goog.style.setStyle(n_28687,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28688 = cljs.core.next.call(null,seq__28667_28681__$1);
var G__28689 = null;
var G__28690 = 0;
var G__28691 = 0;
seq__28667_28671 = G__28688;
chunk__28668_28672 = G__28689;
count__28669_28673 = G__28690;
i__28670_28674 = G__28691;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28692){
var content = cljs.core.first(arglist__28692);
arglist__28692 = cljs.core.next(arglist__28692);
var name = cljs.core.first(arglist__28692);
var value = cljs.core.rest(arglist__28692);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28697_28701 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28698_28702 = null;var count__28699_28703 = 0;var i__28700_28704 = 0;while(true){
if((i__28700_28704 < count__28699_28703))
{var n_28705 = cljs.core._nth.call(null,chunk__28698_28702,i__28700_28704);n_28705.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28706 = seq__28697_28701;
var G__28707 = chunk__28698_28702;
var G__28708 = count__28699_28703;
var G__28709 = (i__28700_28704 + 1);
seq__28697_28701 = G__28706;
chunk__28698_28702 = G__28707;
count__28699_28703 = G__28708;
i__28700_28704 = G__28709;
continue;
}
} else
{var temp__4092__auto___28710 = cljs.core.seq.call(null,seq__28697_28701);if(temp__4092__auto___28710)
{var seq__28697_28711__$1 = temp__4092__auto___28710;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28697_28711__$1))
{var c__4148__auto___28712 = cljs.core.chunk_first.call(null,seq__28697_28711__$1);{
var G__28713 = cljs.core.chunk_rest.call(null,seq__28697_28711__$1);
var G__28714 = c__4148__auto___28712;
var G__28715 = cljs.core.count.call(null,c__4148__auto___28712);
var G__28716 = 0;
seq__28697_28701 = G__28713;
chunk__28698_28702 = G__28714;
count__28699_28703 = G__28715;
i__28700_28704 = G__28716;
continue;
}
} else
{var n_28717 = cljs.core.first.call(null,seq__28697_28711__$1);n_28717.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28718 = cljs.core.next.call(null,seq__28697_28711__$1);
var G__28719 = null;
var G__28720 = 0;
var G__28721 = 0;
seq__28697_28701 = G__28718;
chunk__28698_28702 = G__28719;
count__28699_28703 = G__28720;
i__28700_28704 = G__28721;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28722){
var content = cljs.core.first(arglist__28722);
arglist__28722 = cljs.core.next(arglist__28722);
var name = cljs.core.first(arglist__28722);
var value = cljs.core.rest(arglist__28722);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28727_28731 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28728_28732 = null;var count__28729_28733 = 0;var i__28730_28734 = 0;while(true){
if((i__28730_28734 < count__28729_28733))
{var n_28735 = cljs.core._nth.call(null,chunk__28728_28732,i__28730_28734);n_28735.removeAttribute(cljs.core.name.call(null,name));
{
var G__28736 = seq__28727_28731;
var G__28737 = chunk__28728_28732;
var G__28738 = count__28729_28733;
var G__28739 = (i__28730_28734 + 1);
seq__28727_28731 = G__28736;
chunk__28728_28732 = G__28737;
count__28729_28733 = G__28738;
i__28730_28734 = G__28739;
continue;
}
} else
{var temp__4092__auto___28740 = cljs.core.seq.call(null,seq__28727_28731);if(temp__4092__auto___28740)
{var seq__28727_28741__$1 = temp__4092__auto___28740;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28727_28741__$1))
{var c__4148__auto___28742 = cljs.core.chunk_first.call(null,seq__28727_28741__$1);{
var G__28743 = cljs.core.chunk_rest.call(null,seq__28727_28741__$1);
var G__28744 = c__4148__auto___28742;
var G__28745 = cljs.core.count.call(null,c__4148__auto___28742);
var G__28746 = 0;
seq__28727_28731 = G__28743;
chunk__28728_28732 = G__28744;
count__28729_28733 = G__28745;
i__28730_28734 = G__28746;
continue;
}
} else
{var n_28747 = cljs.core.first.call(null,seq__28727_28741__$1);n_28747.removeAttribute(cljs.core.name.call(null,name));
{
var G__28748 = cljs.core.next.call(null,seq__28727_28741__$1);
var G__28749 = null;
var G__28750 = 0;
var G__28751 = 0;
seq__28727_28731 = G__28748;
chunk__28728_28732 = G__28749;
count__28729_28733 = G__28750;
i__28730_28734 = G__28751;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28753 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28753,0,null);var v = cljs.core.nth.call(null,vec__28753,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28754_SHARP_){var attr = attrs__$1.item(p1__28754_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28761_28767 = cljs.core.seq.call(null,styles);var chunk__28762_28768 = null;var count__28763_28769 = 0;var i__28764_28770 = 0;while(true){
if((i__28764_28770 < count__28763_28769))
{var vec__28765_28771 = cljs.core._nth.call(null,chunk__28762_28768,i__28764_28770);var name_28772 = cljs.core.nth.call(null,vec__28765_28771,0,null);var value_28773 = cljs.core.nth.call(null,vec__28765_28771,1,null);domina.set_style_BANG_.call(null,content,name_28772,value_28773);
{
var G__28774 = seq__28761_28767;
var G__28775 = chunk__28762_28768;
var G__28776 = count__28763_28769;
var G__28777 = (i__28764_28770 + 1);
seq__28761_28767 = G__28774;
chunk__28762_28768 = G__28775;
count__28763_28769 = G__28776;
i__28764_28770 = G__28777;
continue;
}
} else
{var temp__4092__auto___28778 = cljs.core.seq.call(null,seq__28761_28767);if(temp__4092__auto___28778)
{var seq__28761_28779__$1 = temp__4092__auto___28778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28761_28779__$1))
{var c__4148__auto___28780 = cljs.core.chunk_first.call(null,seq__28761_28779__$1);{
var G__28781 = cljs.core.chunk_rest.call(null,seq__28761_28779__$1);
var G__28782 = c__4148__auto___28780;
var G__28783 = cljs.core.count.call(null,c__4148__auto___28780);
var G__28784 = 0;
seq__28761_28767 = G__28781;
chunk__28762_28768 = G__28782;
count__28763_28769 = G__28783;
i__28764_28770 = G__28784;
continue;
}
} else
{var vec__28766_28785 = cljs.core.first.call(null,seq__28761_28779__$1);var name_28786 = cljs.core.nth.call(null,vec__28766_28785,0,null);var value_28787 = cljs.core.nth.call(null,vec__28766_28785,1,null);domina.set_style_BANG_.call(null,content,name_28786,value_28787);
{
var G__28788 = cljs.core.next.call(null,seq__28761_28779__$1);
var G__28789 = null;
var G__28790 = 0;
var G__28791 = 0;
seq__28761_28767 = G__28788;
chunk__28762_28768 = G__28789;
count__28763_28769 = G__28790;
i__28764_28770 = G__28791;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28798_28804 = cljs.core.seq.call(null,attrs);var chunk__28799_28805 = null;var count__28800_28806 = 0;var i__28801_28807 = 0;while(true){
if((i__28801_28807 < count__28800_28806))
{var vec__28802_28808 = cljs.core._nth.call(null,chunk__28799_28805,i__28801_28807);var name_28809 = cljs.core.nth.call(null,vec__28802_28808,0,null);var value_28810 = cljs.core.nth.call(null,vec__28802_28808,1,null);domina.set_attr_BANG_.call(null,content,name_28809,value_28810);
{
var G__28811 = seq__28798_28804;
var G__28812 = chunk__28799_28805;
var G__28813 = count__28800_28806;
var G__28814 = (i__28801_28807 + 1);
seq__28798_28804 = G__28811;
chunk__28799_28805 = G__28812;
count__28800_28806 = G__28813;
i__28801_28807 = G__28814;
continue;
}
} else
{var temp__4092__auto___28815 = cljs.core.seq.call(null,seq__28798_28804);if(temp__4092__auto___28815)
{var seq__28798_28816__$1 = temp__4092__auto___28815;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28798_28816__$1))
{var c__4148__auto___28817 = cljs.core.chunk_first.call(null,seq__28798_28816__$1);{
var G__28818 = cljs.core.chunk_rest.call(null,seq__28798_28816__$1);
var G__28819 = c__4148__auto___28817;
var G__28820 = cljs.core.count.call(null,c__4148__auto___28817);
var G__28821 = 0;
seq__28798_28804 = G__28818;
chunk__28799_28805 = G__28819;
count__28800_28806 = G__28820;
i__28801_28807 = G__28821;
continue;
}
} else
{var vec__28803_28822 = cljs.core.first.call(null,seq__28798_28816__$1);var name_28823 = cljs.core.nth.call(null,vec__28803_28822,0,null);var value_28824 = cljs.core.nth.call(null,vec__28803_28822,1,null);domina.set_attr_BANG_.call(null,content,name_28823,value_28824);
{
var G__28825 = cljs.core.next.call(null,seq__28798_28816__$1);
var G__28826 = null;
var G__28827 = 0;
var G__28828 = 0;
seq__28798_28804 = G__28825;
chunk__28799_28805 = G__28826;
count__28800_28806 = G__28827;
i__28801_28807 = G__28828;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28833_28837 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28834_28838 = null;var count__28835_28839 = 0;var i__28836_28840 = 0;while(true){
if((i__28836_28840 < count__28835_28839))
{var node_28841 = cljs.core._nth.call(null,chunk__28834_28838,i__28836_28840);goog.dom.classes.add(node_28841,class$);
{
var G__28842 = seq__28833_28837;
var G__28843 = chunk__28834_28838;
var G__28844 = count__28835_28839;
var G__28845 = (i__28836_28840 + 1);
seq__28833_28837 = G__28842;
chunk__28834_28838 = G__28843;
count__28835_28839 = G__28844;
i__28836_28840 = G__28845;
continue;
}
} else
{var temp__4092__auto___28846 = cljs.core.seq.call(null,seq__28833_28837);if(temp__4092__auto___28846)
{var seq__28833_28847__$1 = temp__4092__auto___28846;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28833_28847__$1))
{var c__4148__auto___28848 = cljs.core.chunk_first.call(null,seq__28833_28847__$1);{
var G__28849 = cljs.core.chunk_rest.call(null,seq__28833_28847__$1);
var G__28850 = c__4148__auto___28848;
var G__28851 = cljs.core.count.call(null,c__4148__auto___28848);
var G__28852 = 0;
seq__28833_28837 = G__28849;
chunk__28834_28838 = G__28850;
count__28835_28839 = G__28851;
i__28836_28840 = G__28852;
continue;
}
} else
{var node_28853 = cljs.core.first.call(null,seq__28833_28847__$1);goog.dom.classes.add(node_28853,class$);
{
var G__28854 = cljs.core.next.call(null,seq__28833_28847__$1);
var G__28855 = null;
var G__28856 = 0;
var G__28857 = 0;
seq__28833_28837 = G__28854;
chunk__28834_28838 = G__28855;
count__28835_28839 = G__28856;
i__28836_28840 = G__28857;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28862_28866 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28863_28867 = null;var count__28864_28868 = 0;var i__28865_28869 = 0;while(true){
if((i__28865_28869 < count__28864_28868))
{var node_28870 = cljs.core._nth.call(null,chunk__28863_28867,i__28865_28869);goog.dom.classes.remove(node_28870,class$);
{
var G__28871 = seq__28862_28866;
var G__28872 = chunk__28863_28867;
var G__28873 = count__28864_28868;
var G__28874 = (i__28865_28869 + 1);
seq__28862_28866 = G__28871;
chunk__28863_28867 = G__28872;
count__28864_28868 = G__28873;
i__28865_28869 = G__28874;
continue;
}
} else
{var temp__4092__auto___28875 = cljs.core.seq.call(null,seq__28862_28866);if(temp__4092__auto___28875)
{var seq__28862_28876__$1 = temp__4092__auto___28875;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28862_28876__$1))
{var c__4148__auto___28877 = cljs.core.chunk_first.call(null,seq__28862_28876__$1);{
var G__28878 = cljs.core.chunk_rest.call(null,seq__28862_28876__$1);
var G__28879 = c__4148__auto___28877;
var G__28880 = cljs.core.count.call(null,c__4148__auto___28877);
var G__28881 = 0;
seq__28862_28866 = G__28878;
chunk__28863_28867 = G__28879;
count__28864_28868 = G__28880;
i__28865_28869 = G__28881;
continue;
}
} else
{var node_28882 = cljs.core.first.call(null,seq__28862_28876__$1);goog.dom.classes.remove(node_28882,class$);
{
var G__28883 = cljs.core.next.call(null,seq__28862_28876__$1);
var G__28884 = null;
var G__28885 = 0;
var G__28886 = 0;
seq__28862_28866 = G__28883;
chunk__28863_28867 = G__28884;
count__28864_28868 = G__28885;
i__28865_28869 = G__28886;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28891_28895 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28892_28896 = null;var count__28893_28897 = 0;var i__28894_28898 = 0;while(true){
if((i__28894_28898 < count__28893_28897))
{var node_28899 = cljs.core._nth.call(null,chunk__28892_28896,i__28894_28898);goog.dom.classes.toggle(node_28899,class$);
{
var G__28900 = seq__28891_28895;
var G__28901 = chunk__28892_28896;
var G__28902 = count__28893_28897;
var G__28903 = (i__28894_28898 + 1);
seq__28891_28895 = G__28900;
chunk__28892_28896 = G__28901;
count__28893_28897 = G__28902;
i__28894_28898 = G__28903;
continue;
}
} else
{var temp__4092__auto___28904 = cljs.core.seq.call(null,seq__28891_28895);if(temp__4092__auto___28904)
{var seq__28891_28905__$1 = temp__4092__auto___28904;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28891_28905__$1))
{var c__4148__auto___28906 = cljs.core.chunk_first.call(null,seq__28891_28905__$1);{
var G__28907 = cljs.core.chunk_rest.call(null,seq__28891_28905__$1);
var G__28908 = c__4148__auto___28906;
var G__28909 = cljs.core.count.call(null,c__4148__auto___28906);
var G__28910 = 0;
seq__28891_28895 = G__28907;
chunk__28892_28896 = G__28908;
count__28893_28897 = G__28909;
i__28894_28898 = G__28910;
continue;
}
} else
{var node_28911 = cljs.core.first.call(null,seq__28891_28905__$1);goog.dom.classes.toggle(node_28911,class$);
{
var G__28912 = cljs.core.next.call(null,seq__28891_28905__$1);
var G__28913 = null;
var G__28914 = 0;
var G__28915 = 0;
seq__28891_28895 = G__28912;
chunk__28892_28896 = G__28913;
count__28893_28897 = G__28914;
i__28894_28898 = G__28915;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28924__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28920_28925 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28921_28926 = null;var count__28922_28927 = 0;var i__28923_28928 = 0;while(true){
if((i__28923_28928 < count__28922_28927))
{var node_28929 = cljs.core._nth.call(null,chunk__28921_28926,i__28923_28928);goog.dom.classes.set(node_28929,classes_28924__$1);
{
var G__28930 = seq__28920_28925;
var G__28931 = chunk__28921_28926;
var G__28932 = count__28922_28927;
var G__28933 = (i__28923_28928 + 1);
seq__28920_28925 = G__28930;
chunk__28921_28926 = G__28931;
count__28922_28927 = G__28932;
i__28923_28928 = G__28933;
continue;
}
} else
{var temp__4092__auto___28934 = cljs.core.seq.call(null,seq__28920_28925);if(temp__4092__auto___28934)
{var seq__28920_28935__$1 = temp__4092__auto___28934;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28920_28935__$1))
{var c__4148__auto___28936 = cljs.core.chunk_first.call(null,seq__28920_28935__$1);{
var G__28937 = cljs.core.chunk_rest.call(null,seq__28920_28935__$1);
var G__28938 = c__4148__auto___28936;
var G__28939 = cljs.core.count.call(null,c__4148__auto___28936);
var G__28940 = 0;
seq__28920_28925 = G__28937;
chunk__28921_28926 = G__28938;
count__28922_28927 = G__28939;
i__28923_28928 = G__28940;
continue;
}
} else
{var node_28941 = cljs.core.first.call(null,seq__28920_28935__$1);goog.dom.classes.set(node_28941,classes_28924__$1);
{
var G__28942 = cljs.core.next.call(null,seq__28920_28935__$1);
var G__28943 = null;
var G__28944 = 0;
var G__28945 = 0;
seq__28920_28925 = G__28942;
chunk__28921_28926 = G__28943;
count__28922_28927 = G__28944;
i__28923_28928 = G__28945;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28950_28954 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28951_28955 = null;var count__28952_28956 = 0;var i__28953_28957 = 0;while(true){
if((i__28953_28957 < count__28952_28956))
{var node_28958 = cljs.core._nth.call(null,chunk__28951_28955,i__28953_28957);goog.dom.setTextContent(node_28958,value);
{
var G__28959 = seq__28950_28954;
var G__28960 = chunk__28951_28955;
var G__28961 = count__28952_28956;
var G__28962 = (i__28953_28957 + 1);
seq__28950_28954 = G__28959;
chunk__28951_28955 = G__28960;
count__28952_28956 = G__28961;
i__28953_28957 = G__28962;
continue;
}
} else
{var temp__4092__auto___28963 = cljs.core.seq.call(null,seq__28950_28954);if(temp__4092__auto___28963)
{var seq__28950_28964__$1 = temp__4092__auto___28963;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28950_28964__$1))
{var c__4148__auto___28965 = cljs.core.chunk_first.call(null,seq__28950_28964__$1);{
var G__28966 = cljs.core.chunk_rest.call(null,seq__28950_28964__$1);
var G__28967 = c__4148__auto___28965;
var G__28968 = cljs.core.count.call(null,c__4148__auto___28965);
var G__28969 = 0;
seq__28950_28954 = G__28966;
chunk__28951_28955 = G__28967;
count__28952_28956 = G__28968;
i__28953_28957 = G__28969;
continue;
}
} else
{var node_28970 = cljs.core.first.call(null,seq__28950_28964__$1);goog.dom.setTextContent(node_28970,value);
{
var G__28971 = cljs.core.next.call(null,seq__28950_28964__$1);
var G__28972 = null;
var G__28973 = 0;
var G__28974 = 0;
seq__28950_28954 = G__28971;
chunk__28951_28955 = G__28972;
count__28952_28956 = G__28973;
i__28953_28957 = G__28974;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28979_28983 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28980_28984 = null;var count__28981_28985 = 0;var i__28982_28986 = 0;while(true){
if((i__28982_28986 < count__28981_28985))
{var node_28987 = cljs.core._nth.call(null,chunk__28980_28984,i__28982_28986);goog.dom.forms.setValue(node_28987,value);
{
var G__28988 = seq__28979_28983;
var G__28989 = chunk__28980_28984;
var G__28990 = count__28981_28985;
var G__28991 = (i__28982_28986 + 1);
seq__28979_28983 = G__28988;
chunk__28980_28984 = G__28989;
count__28981_28985 = G__28990;
i__28982_28986 = G__28991;
continue;
}
} else
{var temp__4092__auto___28992 = cljs.core.seq.call(null,seq__28979_28983);if(temp__4092__auto___28992)
{var seq__28979_28993__$1 = temp__4092__auto___28992;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28979_28993__$1))
{var c__4148__auto___28994 = cljs.core.chunk_first.call(null,seq__28979_28993__$1);{
var G__28995 = cljs.core.chunk_rest.call(null,seq__28979_28993__$1);
var G__28996 = c__4148__auto___28994;
var G__28997 = cljs.core.count.call(null,c__4148__auto___28994);
var G__28998 = 0;
seq__28979_28983 = G__28995;
chunk__28980_28984 = G__28996;
count__28981_28985 = G__28997;
i__28982_28986 = G__28998;
continue;
}
} else
{var node_28999 = cljs.core.first.call(null,seq__28979_28993__$1);goog.dom.forms.setValue(node_28999,value);
{
var G__29000 = cljs.core.next.call(null,seq__28979_28993__$1);
var G__29001 = null;
var G__29002 = 0;
var G__29003 = 0;
seq__28979_28983 = G__29000;
chunk__28980_28984 = G__29001;
count__28981_28985 = G__29002;
i__28982_28986 = G__29003;
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
{var value_29014 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__29010_29015 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__29011_29016 = null;var count__29012_29017 = 0;var i__29013_29018 = 0;while(true){
if((i__29013_29018 < count__29012_29017))
{var node_29019 = cljs.core._nth.call(null,chunk__29011_29016,i__29013_29018);node_29019.innerHTML = value_29014;
{
var G__29020 = seq__29010_29015;
var G__29021 = chunk__29011_29016;
var G__29022 = count__29012_29017;
var G__29023 = (i__29013_29018 + 1);
seq__29010_29015 = G__29020;
chunk__29011_29016 = G__29021;
count__29012_29017 = G__29022;
i__29013_29018 = G__29023;
continue;
}
} else
{var temp__4092__auto___29024 = cljs.core.seq.call(null,seq__29010_29015);if(temp__4092__auto___29024)
{var seq__29010_29025__$1 = temp__4092__auto___29024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29010_29025__$1))
{var c__4148__auto___29026 = cljs.core.chunk_first.call(null,seq__29010_29025__$1);{
var G__29027 = cljs.core.chunk_rest.call(null,seq__29010_29025__$1);
var G__29028 = c__4148__auto___29026;
var G__29029 = cljs.core.count.call(null,c__4148__auto___29026);
var G__29030 = 0;
seq__29010_29015 = G__29027;
chunk__29011_29016 = G__29028;
count__29012_29017 = G__29029;
i__29013_29018 = G__29030;
continue;
}
} else
{var node_29031 = cljs.core.first.call(null,seq__29010_29025__$1);node_29031.innerHTML = value_29014;
{
var G__29032 = cljs.core.next.call(null,seq__29010_29025__$1);
var G__29033 = null;
var G__29034 = 0;
var G__29035 = 0;
seq__29010_29015 = G__29032;
chunk__29011_29016 = G__29033;
count__29012_29017 = G__29034;
i__29013_29018 = G__29035;
continue;
}
}
} else
{}
}
break;
}
}catch (e29009){if((e29009 instanceof Error))
{var e_29036 = e29009;domina.replace_children_BANG_.call(null,content,value_29014);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29009;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__29043_29047 = cljs.core.seq.call(null,children);var chunk__29044_29048 = null;var count__29045_29049 = 0;var i__29046_29050 = 0;while(true){
if((i__29046_29050 < count__29045_29049))
{var child_29051 = cljs.core._nth.call(null,chunk__29044_29048,i__29046_29050);frag.appendChild(child_29051);
{
var G__29052 = seq__29043_29047;
var G__29053 = chunk__29044_29048;
var G__29054 = count__29045_29049;
var G__29055 = (i__29046_29050 + 1);
seq__29043_29047 = G__29052;
chunk__29044_29048 = G__29053;
count__29045_29049 = G__29054;
i__29046_29050 = G__29055;
continue;
}
} else
{var temp__4092__auto___29056 = cljs.core.seq.call(null,seq__29043_29047);if(temp__4092__auto___29056)
{var seq__29043_29057__$1 = temp__4092__auto___29056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29043_29057__$1))
{var c__4148__auto___29058 = cljs.core.chunk_first.call(null,seq__29043_29057__$1);{
var G__29059 = cljs.core.chunk_rest.call(null,seq__29043_29057__$1);
var G__29060 = c__4148__auto___29058;
var G__29061 = cljs.core.count.call(null,c__4148__auto___29058);
var G__29062 = 0;
seq__29043_29047 = G__29059;
chunk__29044_29048 = G__29060;
count__29045_29049 = G__29061;
i__29046_29050 = G__29062;
continue;
}
} else
{var child_29063 = cljs.core.first.call(null,seq__29043_29057__$1);frag.appendChild(child_29063);
{
var G__29064 = cljs.core.next.call(null,seq__29043_29057__$1);
var G__29065 = null;
var G__29066 = 0;
var G__29067 = 0;
seq__29043_29047 = G__29064;
chunk__29044_29048 = G__29065;
count__29045_29049 = G__29066;
i__29046_29050 = G__29067;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__29037_SHARP_,p2__29038_SHARP_){return f.call(null,p1__29037_SHARP_,p2__29038_SHARP_);
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
{if((function (){var G__29069 = list_thing;if(G__29069)
{var bit__4050__auto__ = (G__29069.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__29069.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29069.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29069);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29069);
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
{if((function (){var G__29070 = content;if(G__29070)
{var bit__4050__auto__ = (G__29070.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__29070.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29070.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29070);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29070);
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
{if((function (){var G__29071 = content;if(G__29071)
{var bit__4050__auto__ = (G__29071.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__29071.cljs$core$ISeqable$))
{return true;
} else
{if((!G__29071.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29071);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__29071);
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
