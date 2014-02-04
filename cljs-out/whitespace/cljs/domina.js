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
var opt_wrapper_36796 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_36797 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_36798 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_36797,table_section_wrapper_36797,opt_wrapper_36796,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_36798,table_section_wrapper_36797,cell_wrapper_36798,opt_wrapper_36796,table_section_wrapper_36797,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_36797]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__36803 = cljs.core.seq.call(null,tbody);var chunk__36804 = null;var count__36805 = 0;var i__36806 = 0;while(true){
if((i__36806 < count__36805))
{var child = cljs.core._nth.call(null,chunk__36804,i__36806);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36807 = seq__36803;
var G__36808 = chunk__36804;
var G__36809 = count__36805;
var G__36810 = (i__36806 + 1);
seq__36803 = G__36807;
chunk__36804 = G__36808;
count__36805 = G__36809;
i__36806 = G__36810;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__36803);if(temp__4092__auto__)
{var seq__36803__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36803__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__36803__$1);{
var G__36811 = cljs.core.chunk_rest.call(null,seq__36803__$1);
var G__36812 = c__4148__auto__;
var G__36813 = cljs.core.count.call(null,c__4148__auto__);
var G__36814 = 0;
seq__36803 = G__36811;
chunk__36804 = G__36812;
count__36805 = G__36813;
i__36806 = G__36814;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__36803__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__36815 = cljs.core.next.call(null,seq__36803__$1);
var G__36816 = null;
var G__36817 = 0;
var G__36818 = 0;
seq__36803 = G__36815;
chunk__36804 = G__36816;
count__36805 = G__36817;
i__36806 = G__36818;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__36820 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__36820,0,null);var start_wrap = cljs.core.nth.call(null,vec__36820,1,null);var end_wrap = cljs.core.nth.call(null,vec__36820,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__36821 = wrapper.lastChild;
var G__36822 = (level - 1);
wrapper = G__36821;
level = G__36822;
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
domina.DomContent = (function (){var obj36824 = {};return obj36824;
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
log_debug.cljs$lang$applyTo = (function (arglist__36825){
var mesg = cljs.core.seq(arglist__36825);
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
log.cljs$lang$applyTo = (function (arglist__36826){
var mesg = cljs.core.seq(arglist__36826);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__36827){
var contents = cljs.core.seq(arglist__36827);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__36828_SHARP_){return p1__36828_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__36829_SHARP_,p2__36830_SHARP_){return goog.dom.insertChildAt(p1__36829_SHARP_,p2__36830_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36832_SHARP_,p2__36831_SHARP_){return goog.dom.insertSiblingBefore(p2__36831_SHARP_,p1__36832_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__36834_SHARP_,p2__36833_SHARP_){return goog.dom.insertSiblingAfter(p2__36833_SHARP_,p1__36834_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__36836_SHARP_,p2__36835_SHARP_){return goog.dom.replaceNode(p2__36835_SHARP_,p1__36836_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__36841_36845 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36842_36846 = null;var count__36843_36847 = 0;var i__36844_36848 = 0;while(true){
if((i__36844_36848 < count__36843_36847))
{var n_36849 = cljs.core._nth.call(null,chunk__36842_36846,i__36844_36848);goog.style.setStyle(n_36849,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36850 = seq__36841_36845;
var G__36851 = chunk__36842_36846;
var G__36852 = count__36843_36847;
var G__36853 = (i__36844_36848 + 1);
seq__36841_36845 = G__36850;
chunk__36842_36846 = G__36851;
count__36843_36847 = G__36852;
i__36844_36848 = G__36853;
continue;
}
} else
{var temp__4092__auto___36854 = cljs.core.seq.call(null,seq__36841_36845);if(temp__4092__auto___36854)
{var seq__36841_36855__$1 = temp__4092__auto___36854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36841_36855__$1))
{var c__4148__auto___36856 = cljs.core.chunk_first.call(null,seq__36841_36855__$1);{
var G__36857 = cljs.core.chunk_rest.call(null,seq__36841_36855__$1);
var G__36858 = c__4148__auto___36856;
var G__36859 = cljs.core.count.call(null,c__4148__auto___36856);
var G__36860 = 0;
seq__36841_36845 = G__36857;
chunk__36842_36846 = G__36858;
count__36843_36847 = G__36859;
i__36844_36848 = G__36860;
continue;
}
} else
{var n_36861 = cljs.core.first.call(null,seq__36841_36855__$1);goog.style.setStyle(n_36861,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36862 = cljs.core.next.call(null,seq__36841_36855__$1);
var G__36863 = null;
var G__36864 = 0;
var G__36865 = 0;
seq__36841_36845 = G__36862;
chunk__36842_36846 = G__36863;
count__36843_36847 = G__36864;
i__36844_36848 = G__36865;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__36866){
var content = cljs.core.first(arglist__36866);
arglist__36866 = cljs.core.next(arglist__36866);
var name = cljs.core.first(arglist__36866);
var value = cljs.core.rest(arglist__36866);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__36871_36875 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36872_36876 = null;var count__36873_36877 = 0;var i__36874_36878 = 0;while(true){
if((i__36874_36878 < count__36873_36877))
{var n_36879 = cljs.core._nth.call(null,chunk__36872_36876,i__36874_36878);n_36879.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36880 = seq__36871_36875;
var G__36881 = chunk__36872_36876;
var G__36882 = count__36873_36877;
var G__36883 = (i__36874_36878 + 1);
seq__36871_36875 = G__36880;
chunk__36872_36876 = G__36881;
count__36873_36877 = G__36882;
i__36874_36878 = G__36883;
continue;
}
} else
{var temp__4092__auto___36884 = cljs.core.seq.call(null,seq__36871_36875);if(temp__4092__auto___36884)
{var seq__36871_36885__$1 = temp__4092__auto___36884;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36871_36885__$1))
{var c__4148__auto___36886 = cljs.core.chunk_first.call(null,seq__36871_36885__$1);{
var G__36887 = cljs.core.chunk_rest.call(null,seq__36871_36885__$1);
var G__36888 = c__4148__auto___36886;
var G__36889 = cljs.core.count.call(null,c__4148__auto___36886);
var G__36890 = 0;
seq__36871_36875 = G__36887;
chunk__36872_36876 = G__36888;
count__36873_36877 = G__36889;
i__36874_36878 = G__36890;
continue;
}
} else
{var n_36891 = cljs.core.first.call(null,seq__36871_36885__$1);n_36891.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__36892 = cljs.core.next.call(null,seq__36871_36885__$1);
var G__36893 = null;
var G__36894 = 0;
var G__36895 = 0;
seq__36871_36875 = G__36892;
chunk__36872_36876 = G__36893;
count__36873_36877 = G__36894;
i__36874_36878 = G__36895;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__36896){
var content = cljs.core.first(arglist__36896);
arglist__36896 = cljs.core.next(arglist__36896);
var name = cljs.core.first(arglist__36896);
var value = cljs.core.rest(arglist__36896);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__36901_36905 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__36902_36906 = null;var count__36903_36907 = 0;var i__36904_36908 = 0;while(true){
if((i__36904_36908 < count__36903_36907))
{var n_36909 = cljs.core._nth.call(null,chunk__36902_36906,i__36904_36908);n_36909.removeAttribute(cljs.core.name.call(null,name));
{
var G__36910 = seq__36901_36905;
var G__36911 = chunk__36902_36906;
var G__36912 = count__36903_36907;
var G__36913 = (i__36904_36908 + 1);
seq__36901_36905 = G__36910;
chunk__36902_36906 = G__36911;
count__36903_36907 = G__36912;
i__36904_36908 = G__36913;
continue;
}
} else
{var temp__4092__auto___36914 = cljs.core.seq.call(null,seq__36901_36905);if(temp__4092__auto___36914)
{var seq__36901_36915__$1 = temp__4092__auto___36914;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36901_36915__$1))
{var c__4148__auto___36916 = cljs.core.chunk_first.call(null,seq__36901_36915__$1);{
var G__36917 = cljs.core.chunk_rest.call(null,seq__36901_36915__$1);
var G__36918 = c__4148__auto___36916;
var G__36919 = cljs.core.count.call(null,c__4148__auto___36916);
var G__36920 = 0;
seq__36901_36905 = G__36917;
chunk__36902_36906 = G__36918;
count__36903_36907 = G__36919;
i__36904_36908 = G__36920;
continue;
}
} else
{var n_36921 = cljs.core.first.call(null,seq__36901_36915__$1);n_36921.removeAttribute(cljs.core.name.call(null,name));
{
var G__36922 = cljs.core.next.call(null,seq__36901_36915__$1);
var G__36923 = null;
var G__36924 = 0;
var G__36925 = 0;
seq__36901_36905 = G__36922;
chunk__36902_36906 = G__36923;
count__36903_36907 = G__36924;
i__36904_36908 = G__36925;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__36927 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__36927,0,null);var v = cljs.core.nth.call(null,vec__36927,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__36928_SHARP_){var attr = attrs__$1.item(p1__36928_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__36935_36941 = cljs.core.seq.call(null,styles);var chunk__36936_36942 = null;var count__36937_36943 = 0;var i__36938_36944 = 0;while(true){
if((i__36938_36944 < count__36937_36943))
{var vec__36939_36945 = cljs.core._nth.call(null,chunk__36936_36942,i__36938_36944);var name_36946 = cljs.core.nth.call(null,vec__36939_36945,0,null);var value_36947 = cljs.core.nth.call(null,vec__36939_36945,1,null);domina.set_style_BANG_.call(null,content,name_36946,value_36947);
{
var G__36948 = seq__36935_36941;
var G__36949 = chunk__36936_36942;
var G__36950 = count__36937_36943;
var G__36951 = (i__36938_36944 + 1);
seq__36935_36941 = G__36948;
chunk__36936_36942 = G__36949;
count__36937_36943 = G__36950;
i__36938_36944 = G__36951;
continue;
}
} else
{var temp__4092__auto___36952 = cljs.core.seq.call(null,seq__36935_36941);if(temp__4092__auto___36952)
{var seq__36935_36953__$1 = temp__4092__auto___36952;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36935_36953__$1))
{var c__4148__auto___36954 = cljs.core.chunk_first.call(null,seq__36935_36953__$1);{
var G__36955 = cljs.core.chunk_rest.call(null,seq__36935_36953__$1);
var G__36956 = c__4148__auto___36954;
var G__36957 = cljs.core.count.call(null,c__4148__auto___36954);
var G__36958 = 0;
seq__36935_36941 = G__36955;
chunk__36936_36942 = G__36956;
count__36937_36943 = G__36957;
i__36938_36944 = G__36958;
continue;
}
} else
{var vec__36940_36959 = cljs.core.first.call(null,seq__36935_36953__$1);var name_36960 = cljs.core.nth.call(null,vec__36940_36959,0,null);var value_36961 = cljs.core.nth.call(null,vec__36940_36959,1,null);domina.set_style_BANG_.call(null,content,name_36960,value_36961);
{
var G__36962 = cljs.core.next.call(null,seq__36935_36953__$1);
var G__36963 = null;
var G__36964 = 0;
var G__36965 = 0;
seq__36935_36941 = G__36962;
chunk__36936_36942 = G__36963;
count__36937_36943 = G__36964;
i__36938_36944 = G__36965;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__36972_36978 = cljs.core.seq.call(null,attrs);var chunk__36973_36979 = null;var count__36974_36980 = 0;var i__36975_36981 = 0;while(true){
if((i__36975_36981 < count__36974_36980))
{var vec__36976_36982 = cljs.core._nth.call(null,chunk__36973_36979,i__36975_36981);var name_36983 = cljs.core.nth.call(null,vec__36976_36982,0,null);var value_36984 = cljs.core.nth.call(null,vec__36976_36982,1,null);domina.set_attr_BANG_.call(null,content,name_36983,value_36984);
{
var G__36985 = seq__36972_36978;
var G__36986 = chunk__36973_36979;
var G__36987 = count__36974_36980;
var G__36988 = (i__36975_36981 + 1);
seq__36972_36978 = G__36985;
chunk__36973_36979 = G__36986;
count__36974_36980 = G__36987;
i__36975_36981 = G__36988;
continue;
}
} else
{var temp__4092__auto___36989 = cljs.core.seq.call(null,seq__36972_36978);if(temp__4092__auto___36989)
{var seq__36972_36990__$1 = temp__4092__auto___36989;if(cljs.core.chunked_seq_QMARK_.call(null,seq__36972_36990__$1))
{var c__4148__auto___36991 = cljs.core.chunk_first.call(null,seq__36972_36990__$1);{
var G__36992 = cljs.core.chunk_rest.call(null,seq__36972_36990__$1);
var G__36993 = c__4148__auto___36991;
var G__36994 = cljs.core.count.call(null,c__4148__auto___36991);
var G__36995 = 0;
seq__36972_36978 = G__36992;
chunk__36973_36979 = G__36993;
count__36974_36980 = G__36994;
i__36975_36981 = G__36995;
continue;
}
} else
{var vec__36977_36996 = cljs.core.first.call(null,seq__36972_36990__$1);var name_36997 = cljs.core.nth.call(null,vec__36977_36996,0,null);var value_36998 = cljs.core.nth.call(null,vec__36977_36996,1,null);domina.set_attr_BANG_.call(null,content,name_36997,value_36998);
{
var G__36999 = cljs.core.next.call(null,seq__36972_36990__$1);
var G__37000 = null;
var G__37001 = 0;
var G__37002 = 0;
seq__36972_36978 = G__36999;
chunk__36973_36979 = G__37000;
count__36974_36980 = G__37001;
i__36975_36981 = G__37002;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__37007_37011 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37008_37012 = null;var count__37009_37013 = 0;var i__37010_37014 = 0;while(true){
if((i__37010_37014 < count__37009_37013))
{var node_37015 = cljs.core._nth.call(null,chunk__37008_37012,i__37010_37014);goog.dom.classes.add(node_37015,class$);
{
var G__37016 = seq__37007_37011;
var G__37017 = chunk__37008_37012;
var G__37018 = count__37009_37013;
var G__37019 = (i__37010_37014 + 1);
seq__37007_37011 = G__37016;
chunk__37008_37012 = G__37017;
count__37009_37013 = G__37018;
i__37010_37014 = G__37019;
continue;
}
} else
{var temp__4092__auto___37020 = cljs.core.seq.call(null,seq__37007_37011);if(temp__4092__auto___37020)
{var seq__37007_37021__$1 = temp__4092__auto___37020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37007_37021__$1))
{var c__4148__auto___37022 = cljs.core.chunk_first.call(null,seq__37007_37021__$1);{
var G__37023 = cljs.core.chunk_rest.call(null,seq__37007_37021__$1);
var G__37024 = c__4148__auto___37022;
var G__37025 = cljs.core.count.call(null,c__4148__auto___37022);
var G__37026 = 0;
seq__37007_37011 = G__37023;
chunk__37008_37012 = G__37024;
count__37009_37013 = G__37025;
i__37010_37014 = G__37026;
continue;
}
} else
{var node_37027 = cljs.core.first.call(null,seq__37007_37021__$1);goog.dom.classes.add(node_37027,class$);
{
var G__37028 = cljs.core.next.call(null,seq__37007_37021__$1);
var G__37029 = null;
var G__37030 = 0;
var G__37031 = 0;
seq__37007_37011 = G__37028;
chunk__37008_37012 = G__37029;
count__37009_37013 = G__37030;
i__37010_37014 = G__37031;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__37036_37040 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37037_37041 = null;var count__37038_37042 = 0;var i__37039_37043 = 0;while(true){
if((i__37039_37043 < count__37038_37042))
{var node_37044 = cljs.core._nth.call(null,chunk__37037_37041,i__37039_37043);goog.dom.classes.remove(node_37044,class$);
{
var G__37045 = seq__37036_37040;
var G__37046 = chunk__37037_37041;
var G__37047 = count__37038_37042;
var G__37048 = (i__37039_37043 + 1);
seq__37036_37040 = G__37045;
chunk__37037_37041 = G__37046;
count__37038_37042 = G__37047;
i__37039_37043 = G__37048;
continue;
}
} else
{var temp__4092__auto___37049 = cljs.core.seq.call(null,seq__37036_37040);if(temp__4092__auto___37049)
{var seq__37036_37050__$1 = temp__4092__auto___37049;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37036_37050__$1))
{var c__4148__auto___37051 = cljs.core.chunk_first.call(null,seq__37036_37050__$1);{
var G__37052 = cljs.core.chunk_rest.call(null,seq__37036_37050__$1);
var G__37053 = c__4148__auto___37051;
var G__37054 = cljs.core.count.call(null,c__4148__auto___37051);
var G__37055 = 0;
seq__37036_37040 = G__37052;
chunk__37037_37041 = G__37053;
count__37038_37042 = G__37054;
i__37039_37043 = G__37055;
continue;
}
} else
{var node_37056 = cljs.core.first.call(null,seq__37036_37050__$1);goog.dom.classes.remove(node_37056,class$);
{
var G__37057 = cljs.core.next.call(null,seq__37036_37050__$1);
var G__37058 = null;
var G__37059 = 0;
var G__37060 = 0;
seq__37036_37040 = G__37057;
chunk__37037_37041 = G__37058;
count__37038_37042 = G__37059;
i__37039_37043 = G__37060;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__37065_37069 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37066_37070 = null;var count__37067_37071 = 0;var i__37068_37072 = 0;while(true){
if((i__37068_37072 < count__37067_37071))
{var node_37073 = cljs.core._nth.call(null,chunk__37066_37070,i__37068_37072);goog.dom.classes.toggle(node_37073,class$);
{
var G__37074 = seq__37065_37069;
var G__37075 = chunk__37066_37070;
var G__37076 = count__37067_37071;
var G__37077 = (i__37068_37072 + 1);
seq__37065_37069 = G__37074;
chunk__37066_37070 = G__37075;
count__37067_37071 = G__37076;
i__37068_37072 = G__37077;
continue;
}
} else
{var temp__4092__auto___37078 = cljs.core.seq.call(null,seq__37065_37069);if(temp__4092__auto___37078)
{var seq__37065_37079__$1 = temp__4092__auto___37078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37065_37079__$1))
{var c__4148__auto___37080 = cljs.core.chunk_first.call(null,seq__37065_37079__$1);{
var G__37081 = cljs.core.chunk_rest.call(null,seq__37065_37079__$1);
var G__37082 = c__4148__auto___37080;
var G__37083 = cljs.core.count.call(null,c__4148__auto___37080);
var G__37084 = 0;
seq__37065_37069 = G__37081;
chunk__37066_37070 = G__37082;
count__37067_37071 = G__37083;
i__37068_37072 = G__37084;
continue;
}
} else
{var node_37085 = cljs.core.first.call(null,seq__37065_37079__$1);goog.dom.classes.toggle(node_37085,class$);
{
var G__37086 = cljs.core.next.call(null,seq__37065_37079__$1);
var G__37087 = null;
var G__37088 = 0;
var G__37089 = 0;
seq__37065_37069 = G__37086;
chunk__37066_37070 = G__37087;
count__37067_37071 = G__37088;
i__37068_37072 = G__37089;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_37098__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__37094_37099 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37095_37100 = null;var count__37096_37101 = 0;var i__37097_37102 = 0;while(true){
if((i__37097_37102 < count__37096_37101))
{var node_37103 = cljs.core._nth.call(null,chunk__37095_37100,i__37097_37102);goog.dom.classes.set(node_37103,classes_37098__$1);
{
var G__37104 = seq__37094_37099;
var G__37105 = chunk__37095_37100;
var G__37106 = count__37096_37101;
var G__37107 = (i__37097_37102 + 1);
seq__37094_37099 = G__37104;
chunk__37095_37100 = G__37105;
count__37096_37101 = G__37106;
i__37097_37102 = G__37107;
continue;
}
} else
{var temp__4092__auto___37108 = cljs.core.seq.call(null,seq__37094_37099);if(temp__4092__auto___37108)
{var seq__37094_37109__$1 = temp__4092__auto___37108;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37094_37109__$1))
{var c__4148__auto___37110 = cljs.core.chunk_first.call(null,seq__37094_37109__$1);{
var G__37111 = cljs.core.chunk_rest.call(null,seq__37094_37109__$1);
var G__37112 = c__4148__auto___37110;
var G__37113 = cljs.core.count.call(null,c__4148__auto___37110);
var G__37114 = 0;
seq__37094_37099 = G__37111;
chunk__37095_37100 = G__37112;
count__37096_37101 = G__37113;
i__37097_37102 = G__37114;
continue;
}
} else
{var node_37115 = cljs.core.first.call(null,seq__37094_37109__$1);goog.dom.classes.set(node_37115,classes_37098__$1);
{
var G__37116 = cljs.core.next.call(null,seq__37094_37109__$1);
var G__37117 = null;
var G__37118 = 0;
var G__37119 = 0;
seq__37094_37099 = G__37116;
chunk__37095_37100 = G__37117;
count__37096_37101 = G__37118;
i__37097_37102 = G__37119;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__37124_37128 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37125_37129 = null;var count__37126_37130 = 0;var i__37127_37131 = 0;while(true){
if((i__37127_37131 < count__37126_37130))
{var node_37132 = cljs.core._nth.call(null,chunk__37125_37129,i__37127_37131);goog.dom.setTextContent(node_37132,value);
{
var G__37133 = seq__37124_37128;
var G__37134 = chunk__37125_37129;
var G__37135 = count__37126_37130;
var G__37136 = (i__37127_37131 + 1);
seq__37124_37128 = G__37133;
chunk__37125_37129 = G__37134;
count__37126_37130 = G__37135;
i__37127_37131 = G__37136;
continue;
}
} else
{var temp__4092__auto___37137 = cljs.core.seq.call(null,seq__37124_37128);if(temp__4092__auto___37137)
{var seq__37124_37138__$1 = temp__4092__auto___37137;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37124_37138__$1))
{var c__4148__auto___37139 = cljs.core.chunk_first.call(null,seq__37124_37138__$1);{
var G__37140 = cljs.core.chunk_rest.call(null,seq__37124_37138__$1);
var G__37141 = c__4148__auto___37139;
var G__37142 = cljs.core.count.call(null,c__4148__auto___37139);
var G__37143 = 0;
seq__37124_37128 = G__37140;
chunk__37125_37129 = G__37141;
count__37126_37130 = G__37142;
i__37127_37131 = G__37143;
continue;
}
} else
{var node_37144 = cljs.core.first.call(null,seq__37124_37138__$1);goog.dom.setTextContent(node_37144,value);
{
var G__37145 = cljs.core.next.call(null,seq__37124_37138__$1);
var G__37146 = null;
var G__37147 = 0;
var G__37148 = 0;
seq__37124_37128 = G__37145;
chunk__37125_37129 = G__37146;
count__37126_37130 = G__37147;
i__37127_37131 = G__37148;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__37153_37157 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37154_37158 = null;var count__37155_37159 = 0;var i__37156_37160 = 0;while(true){
if((i__37156_37160 < count__37155_37159))
{var node_37161 = cljs.core._nth.call(null,chunk__37154_37158,i__37156_37160);goog.dom.forms.setValue(node_37161,value);
{
var G__37162 = seq__37153_37157;
var G__37163 = chunk__37154_37158;
var G__37164 = count__37155_37159;
var G__37165 = (i__37156_37160 + 1);
seq__37153_37157 = G__37162;
chunk__37154_37158 = G__37163;
count__37155_37159 = G__37164;
i__37156_37160 = G__37165;
continue;
}
} else
{var temp__4092__auto___37166 = cljs.core.seq.call(null,seq__37153_37157);if(temp__4092__auto___37166)
{var seq__37153_37167__$1 = temp__4092__auto___37166;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37153_37167__$1))
{var c__4148__auto___37168 = cljs.core.chunk_first.call(null,seq__37153_37167__$1);{
var G__37169 = cljs.core.chunk_rest.call(null,seq__37153_37167__$1);
var G__37170 = c__4148__auto___37168;
var G__37171 = cljs.core.count.call(null,c__4148__auto___37168);
var G__37172 = 0;
seq__37153_37157 = G__37169;
chunk__37154_37158 = G__37170;
count__37155_37159 = G__37171;
i__37156_37160 = G__37172;
continue;
}
} else
{var node_37173 = cljs.core.first.call(null,seq__37153_37167__$1);goog.dom.forms.setValue(node_37173,value);
{
var G__37174 = cljs.core.next.call(null,seq__37153_37167__$1);
var G__37175 = null;
var G__37176 = 0;
var G__37177 = 0;
seq__37153_37157 = G__37174;
chunk__37154_37158 = G__37175;
count__37155_37159 = G__37176;
i__37156_37160 = G__37177;
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
{var value_37188 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__37184_37189 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__37185_37190 = null;var count__37186_37191 = 0;var i__37187_37192 = 0;while(true){
if((i__37187_37192 < count__37186_37191))
{var node_37193 = cljs.core._nth.call(null,chunk__37185_37190,i__37187_37192);node_37193.innerHTML = value_37188;
{
var G__37194 = seq__37184_37189;
var G__37195 = chunk__37185_37190;
var G__37196 = count__37186_37191;
var G__37197 = (i__37187_37192 + 1);
seq__37184_37189 = G__37194;
chunk__37185_37190 = G__37195;
count__37186_37191 = G__37196;
i__37187_37192 = G__37197;
continue;
}
} else
{var temp__4092__auto___37198 = cljs.core.seq.call(null,seq__37184_37189);if(temp__4092__auto___37198)
{var seq__37184_37199__$1 = temp__4092__auto___37198;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37184_37199__$1))
{var c__4148__auto___37200 = cljs.core.chunk_first.call(null,seq__37184_37199__$1);{
var G__37201 = cljs.core.chunk_rest.call(null,seq__37184_37199__$1);
var G__37202 = c__4148__auto___37200;
var G__37203 = cljs.core.count.call(null,c__4148__auto___37200);
var G__37204 = 0;
seq__37184_37189 = G__37201;
chunk__37185_37190 = G__37202;
count__37186_37191 = G__37203;
i__37187_37192 = G__37204;
continue;
}
} else
{var node_37205 = cljs.core.first.call(null,seq__37184_37199__$1);node_37205.innerHTML = value_37188;
{
var G__37206 = cljs.core.next.call(null,seq__37184_37199__$1);
var G__37207 = null;
var G__37208 = 0;
var G__37209 = 0;
seq__37184_37189 = G__37206;
chunk__37185_37190 = G__37207;
count__37186_37191 = G__37208;
i__37187_37192 = G__37209;
continue;
}
}
} else
{}
}
break;
}
}catch (e37183){if((e37183 instanceof Error))
{var e_37210 = e37183;domina.replace_children_BANG_.call(null,content,value_37188);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37183;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__37217_37221 = cljs.core.seq.call(null,children);var chunk__37218_37222 = null;var count__37219_37223 = 0;var i__37220_37224 = 0;while(true){
if((i__37220_37224 < count__37219_37223))
{var child_37225 = cljs.core._nth.call(null,chunk__37218_37222,i__37220_37224);frag.appendChild(child_37225);
{
var G__37226 = seq__37217_37221;
var G__37227 = chunk__37218_37222;
var G__37228 = count__37219_37223;
var G__37229 = (i__37220_37224 + 1);
seq__37217_37221 = G__37226;
chunk__37218_37222 = G__37227;
count__37219_37223 = G__37228;
i__37220_37224 = G__37229;
continue;
}
} else
{var temp__4092__auto___37230 = cljs.core.seq.call(null,seq__37217_37221);if(temp__4092__auto___37230)
{var seq__37217_37231__$1 = temp__4092__auto___37230;if(cljs.core.chunked_seq_QMARK_.call(null,seq__37217_37231__$1))
{var c__4148__auto___37232 = cljs.core.chunk_first.call(null,seq__37217_37231__$1);{
var G__37233 = cljs.core.chunk_rest.call(null,seq__37217_37231__$1);
var G__37234 = c__4148__auto___37232;
var G__37235 = cljs.core.count.call(null,c__4148__auto___37232);
var G__37236 = 0;
seq__37217_37221 = G__37233;
chunk__37218_37222 = G__37234;
count__37219_37223 = G__37235;
i__37220_37224 = G__37236;
continue;
}
} else
{var child_37237 = cljs.core.first.call(null,seq__37217_37231__$1);frag.appendChild(child_37237);
{
var G__37238 = cljs.core.next.call(null,seq__37217_37231__$1);
var G__37239 = null;
var G__37240 = 0;
var G__37241 = 0;
seq__37217_37221 = G__37238;
chunk__37218_37222 = G__37239;
count__37219_37223 = G__37240;
i__37220_37224 = G__37241;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__37211_SHARP_,p2__37212_SHARP_){return f.call(null,p1__37211_SHARP_,p2__37212_SHARP_);
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
{if((function (){var G__37243 = list_thing;if(G__37243)
{var bit__4050__auto__ = (G__37243.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37243.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37243.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37243);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37243);
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
{if((function (){var G__37244 = content;if(G__37244)
{var bit__4050__auto__ = (G__37244.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37244.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37244.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37244);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37244);
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
{if((function (){var G__37245 = content;if(G__37245)
{var bit__4050__auto__ = (G__37245.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__37245.cljs$core$ISeqable$))
{return true;
} else
{if((!G__37245.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37245);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__37245);
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
